import { createContext } from "react";
import { actionTypes } from "../actions/cityActions";

export const CityContext = createContext(null);

export const cityState = {
  city: "Toronto",
  salaries: {},
  ratings: {},
};

export const cityReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CITY:
      return { ...state, city: action.city };

    case actionTypes.UPDATE_RATINGS:
      return { ...state, ratings: action.ratings };

    case actionTypes.UPDATE_SALARIES:
      return { ...state, salaries: action.salaries };

    default:
      return state;
  }
};
