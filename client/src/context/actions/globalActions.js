export const actionTypes = {
  SET_AUTH: "SET_AUTH",
  SET_TOKEN: "SET_TOKEN",
  SET_USERNAME: "SET_USERNAME",
};

export const setAuth = () => ({ type: actionTypes.SET_AUTH });

export const setToken = (token) => ({ type: actionTypes.SET_TOKEN, token });

export const setUsername = (username) => ({
  type: actionTypes.SET_USERNAME,
  username,
});
