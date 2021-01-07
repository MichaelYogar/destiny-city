export const actionTypes = {
  SET_AUTH: "SET_AUTH",
  SET_TOKEN: "SET_TOKEN",
  SET_USERNAME: "SET_USERNAME",
  USER_LOGOUT: "USER_LOGOUT",
};

export const setAuth = () => ({ type: actionTypes.SET_AUTH });

export const userLogout = () => ({ type: actionTypes.USER_LOGOUT });

export const setToken = (token) => ({ type: actionTypes.SET_TOKEN, token });

export const setUsername = (username) => ({
  type: actionTypes.SET_USERNAME,
  username,
});
