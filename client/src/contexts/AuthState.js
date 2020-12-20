import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import { UPDATE_TOKEN } from "../reducers/auth-actions";
import authReducer from "../reducers/auth-reducer";

function AuthState(props) {
  const initialState = {
    token: "",
    isAuth: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const updateToken = (token) => {
    console.log(token);
    dispatch({
      type: UPDATE_TOKEN,
      payload: token,
    });
  };

  const updateAuth = (status) => {
    console.log(status);
    dispatch({
      type: UPDATE_TOKEN,
      payload: status,
    });
  };

  return (
    <div>
      <AuthContext.Provider
        value={{
          ...state,
          updateToken,
          updateAuth,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthState;
