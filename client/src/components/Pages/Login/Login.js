import React, { useContext, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../../hooks/useStyles";
import { useForm } from "react-hook-form";
import axios from "axios";
import CityContext from "../../../context/CityContext";
import { GlobalContext } from "../../../context/reducers/globalReducer";
import { Link as RouterLink, Redirect } from "react-router-dom";

import {
  setAuth,
  setToken,
  setUsername,
} from "../../../context/actions/globalActions";

export default function Login(props) {
  const classes = useStyles();
  const [{ isAuth }, dispatchToGlobal] = useContext(GlobalContext);
  const { register, handleSubmit } = useForm();
  const { City } = useContext(CityContext);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/auth/login", data);
      const token = response.data.jwtToken;

      if (token === undefined || token === null) {
        // use react-toaster to say they need to submit valid info
        alert("token is undefined");
        // valid token
      } else {
        dispatchToGlobal(setAuth());
        dispatchToGlobal(setToken(token));
        dispatchToGlobal(setUsername(data.username));
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    console.log(City);
  }, [City]);

  return (
    <>
      {isAuth ? (
        <Redirect to="/" />
      ) : (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.form}
                noValidate
              >
                <TextField
                  inputRef={register}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="off"
                  autoFocus
                />
                <TextField
                  inputRef={register}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="off"
                  autoFocus
                />
                <TextField
                  inputRef={register}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link component={RouterLink} to="/" variant="body2">
                      W2W
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link component={RouterLink} to="/sign-up" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
}
