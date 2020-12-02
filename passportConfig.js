const LocalStrategy = require("passport-local").Strategy;
const db = require("./db");
const bcrypt = require("bcrypt");

const initialize = (passport) => {
  console.log("Initialized");

  const authenticateUser = async (username, password, done) => {
    console.log(username, password);
    console.log("i get here akl;sfj;lkadjfl;a");
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
            console.log("i get here, there is a match");
            return done(null, user);
          } else {
            //password is incorrect
            console.log("i get here, password is incorrect");
            return done(null, false, { message: "Password is incorrect" });
          }
        });
      } else {
        // No user
        return done(null, false, {
          message: "No user with that username address",
        });
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
  // Stores user details inside session. serializeUser determines which data of the user
  // object should be stored in the session. The result of the serializeUser method is attached
  // to the session as req.session.passport.user = {}. Here for instance, it would be (as we provide
  //   the user id as the key) req.session.passport.user = {id: 'xyz'}
  passport.serializeUser((user, done) => done(null, user.id));

  // In deserializeUser that key is matched with the in memory array / database or any data resource.
  // The fetched object is attached to the request object as req.user

  passport.deserializeUser((id, done) => {
    db.query(`SELECT * FROM users WHERE id = $1`, [id], (err, results) => {
      if (err) {
        return done(err);
      }
      console.log(`ID is ${results.rows[0].id}`);
      return done(null, results.rows[0]);
    });
  });
};

module.exports = initialize;
