import { UPDATE_CITY } from "./city-actions";

const cityReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CITY:
      // for null payload
      if (!action.payload) return state;
      return { ...state, City: action.payload.City };
    default:
      return state;
  }
};

export default cityReducer;
