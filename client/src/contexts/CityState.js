import React, { useReducer } from "react";
import { CityContext } from "./CityContext";
import {
  UPDATE_CITY,
  UPDATE_BUTTON_STATE,
  UPDATE_CITY_RATINGS,
  UPDATE_CITY_SALARIES,
} from "../reducers/city-actions";
import cityReducer from "../reducers/city-reducer";

function CityState(props) {
  const initialState = {
    City: "Toronto",
    buttonState: "false",
    ratings: {},
    salaries: {},
  };

  const [state, dispatch] = useReducer(cityReducer, initialState);

  const updateCity = (city) => {
    dispatch({
      type: UPDATE_CITY,
      payload: city,
    });
  };

  const updateButtonState = (state) => {
    dispatch({
      type: UPDATE_BUTTON_STATE,
      payload: state,
    });
  };

  const updateCityRatings = (state) => {
    dispatch({
      type: UPDATE_CITY_RATINGS,
      payload: state,
    });
  };

  const updateCitySalaries = (state) => {
    dispatch({
      type: UPDATE_CITY_SALARIES,
      payload: state,
    });
  };

  return (
    <div>
      <CityContext.Provider
        value={{
          ...state,
          updateCity,
          updateCityRatings,
          updateButtonState,
          updateCitySalaries,
        }}
      >
        {props.children}
      </CityContext.Provider>
    </div>
  );
}

export default CityState;
