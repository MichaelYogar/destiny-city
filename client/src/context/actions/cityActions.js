export const actionTypes = {
  UPDATE_CITY: "UPDATE_CITY",
  UPDATE_RATINGS: "UPDATE_RATINGS",
  UPDATE_SALARIES: "UPDATE_SALARIES",
};

export const updateCity = (city) => ({ type: actionTypes.SET_TOKEN, city });

export const updateRatings = (ratings) => ({
  type: actionTypes.SET_TOKEN,
  ratings,
});

export const updateSalries = (salaries) => ({
  type: actionTypes.SET_TOKEN,
  salaries,
});
