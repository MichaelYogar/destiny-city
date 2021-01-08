import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props.location);
        if (isAuth) return <Component />;
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;
