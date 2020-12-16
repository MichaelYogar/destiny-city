import {
  UPDATE_BUTTON_STATE,
  UPDATE_CITY,
  UPDATE_CITY_RATINGS,
  UPDATE_CITY_SALARIES,
} from "./city-actions";

const cityReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CITY:
      // for null payload
      if (!action.payload) return state;
      return { ...state, City: action.payload.City };

    case UPDATE_CITY_SALARIES:
      return { ...state, salaries: action.payload[0] };

    case UPDATE_CITY_RATINGS:
      return { ...state, ratings: action.payload[1] };

    case UPDATE_BUTTON_STATE:
      return { ...state, buttonState: action.payload.buttonState };

    default:
      return state;
  }
};

export default cityReducer;
