import React, { useContext } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { CityContext } from "../../../contexts/CityContext";
import { useHistory } from "react-router-dom";
import { Button } from "../../Button/Button";
import "./Hero.scss";

function Hero({
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
  const { updateCity } = useContext(CityContext);
  const history = useHistory();

  return (
    <>
      <div className={lightBg ? "home__hero" : "home__hero dark"}>
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Autocomplete
                  onChange={(event, value) => updateCity(value)}
                  id="combo-box-demo"
                  options={options}
                  getOptionLabel={(option) => option.City}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="City" variant="outlined" />
                  )}
                />
                <Button type="submit" onClick={() => history.push("/info")}>
                  Search
                </Button>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
