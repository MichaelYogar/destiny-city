import { createContext } from "react";
import { actionTypes } from "../actions/globalActions";

export const GlobalContext = createContext(null);

export const globalState = {
  isAuth: false,
  token: "",
  username: "",
};

export const globalReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return { ...state, isAuth: true };

    case actionTypes.USER_LOGOUT:
      return { ...state, isAuth: false };

    case actionTypes.SET_TOKEN:
      return { ...state, token: action.token };

    case actionTypes.SET_USERNAME:
      return { ...state, username: action.username };
    default:
      return state;
  }
};
