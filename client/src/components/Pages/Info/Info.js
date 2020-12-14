import React, { useContext } from "react";
import { CityContext } from "../../../contexts/CityContext";

function Info() {
  const { City } = useContext(CityContext);
  return <div>{City}</div>;
}

export default Info;
