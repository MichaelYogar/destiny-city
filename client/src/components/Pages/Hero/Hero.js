import React, { useContext } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { CityContext } from "../../../context/reducers/cityReducer";
import { useHistory } from "react-router-dom";
import { Button } from "../../Button/Button";
import "./Hero.scss";
import axios from "axios";
import {
  updateCity,
  updateRatings,
  updateSalaries,
} from "../../../context/actions/cityActions";

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
  const [{ city }, dispatchToCity] = useContext(CityContext);

  const history = useHistory();

  const handleClick = () => {
    const api_call = async () => {
      try {
        const all = await Promise.all([
          axios.post("api/cities/salaries", {
            city,
          }),
          axios.post("api/cities/ratings", { city }),
        ]);
        dispatchToCity(updateSalaries(all[0]));
        dispatchToCity(updateRatings(all[1]));
        history.push("/info");
      } catch (error) {
        console.log(error);
      }
    };
    api_call();
  };

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
                  onChange={(event, value) =>
                    dispatchToCity(updateCity(value.City))
                  }
                  id="combo-box-demo"
                  options={options}
                  getOptionLabel={(option) => option.City}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="City" variant="outlined" />
                  )}
                />
                <Button type="submit" onClick={handleClick}>
                  {buttonLabel}
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
