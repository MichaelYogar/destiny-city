import React, { useReducer } from "react";
import { CityContext } from "./CityContext";
import { UPDATE_CITY } from "../reducers/city-actions";
import cityReducer from "../reducers/city-reducer";

function CityState(props) {
  const initialState = {
    City: "Toronto",
  };

  // state = {City: "Toronto"}
  const [state, dispatch] = useReducer(cityReducer, initialState);

  const updateCity = (city) => {
    dispatch({
      type: UPDATE_CITY,
      payload: city,
    });
  };

  return (
    <div>
      <CityContext.Provider value={{ ...state, updateCity }}>
        {props.children}
      </CityContext.Provider>
    </div>
  );
}

export default CityState;
