export const actionTypes = {
  UPDATE_CITY: "UPDATE_CITY",
  UPDATE_RATINGS: "UPDATE_RATINGS",
  UPDATE_SALARIES: "UPDATE_SALARIES",
};

export const updateCity = (city) => ({ type: actionTypes.UPDATE_CITY, city });

export const updateRatings = (ratings) => ({
  type: actionTypes.UPDATE_RATINGS,
  ratings,
});

export const updateSalaries = (salaries) => ({
  type: actionTypes.UPDATE_SALARIES,
  salaries,
});
