const LocalStrategy = require("passport-local").Strategy;
const db = require("./db");
const bcrypt = require("bcrypt");

const initialize = (passport) => {
  console.log("Initialized");

  const authenticateUser = async (username, password, done) => {
    console.log(username, password);
    try {
      const results = await db.query(
        `SELECT * FROM users WHERE username = $1`,
        [username]
      );
      console.log(results.rows);
      if (results.rows.length > 0) {
        const user = results.rows[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.log(err);
          }
          if (isMatch) {
            console.log("Password is correct");
            return done(null, user);
          } else {
            //password is incorrect
            console.log("Password is incorrect");
            return done(null, false);
          }
        });
      } else {
        // No user
        return done(null, false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  passport.use(
    new LocalStrategy(
      { usernameField: "username", passwordField: "password" },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser(async (id, done) => {
    try {
      const results = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
      console.log(`ID is ${results.rows[0].id}`);
      return done(null, results.rows[0]);
    } catch (err) {
      console.log(err);
      return done(err);
    }
  });
};

module.exports = initialize;
