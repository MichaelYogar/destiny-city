import { UPDATE_AUTH, UPDATE_TOKEN } from "./auth-actions";

const authReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...state, token: action.payload };
    case UPDATE_AUTH:
      return { ...state, isAuth: true };
    default:
      return state;
  }
};

export default authReducer;
