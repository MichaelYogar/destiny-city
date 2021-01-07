import React, { useContext } from "react";
import SalaryTable from "./SalaryTable/SalaryTable";
import { CityContext } from "../../../context/reducers/cityReducer";
import "./HeroInfo.scss";
import { Redirect } from "react-router-dom";
import BarChart from "./BarChart/BarChart";

function HeroHome({
  options,
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  const [{ salaries }] = useContext(CityContext);

  const isLoaded = (s) => {
    if (Object.keys(s).length === 0) return <Redirect to="/" />;
    else {
      return (
        <div className=" lightBg hero-info__salary-table">
          <BarChart />
          <div style={{ marginTop: "10px" }}>
            <SalaryTable />
          </div>
        </div>
      );
    }
  };

  return (
    // add8e6
    <div className="hero-info">{isLoaded(salaries)}</div>
  );
}

export default HeroHome;
