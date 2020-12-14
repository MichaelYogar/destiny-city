const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/cities", async (req, res) => {
  const city = req.body.City;
  let url = `https://api.teleport.org/api/cities/?search=${city}`;
  const encodedURI = encodeURI(url);

  try {
    const result = await axios.get(encodedURI);
    const arrayOfObjects = result.data._embedded["city:search-results"];
    const geonameID = arrayOfObjects[0]["_links"]["city:item"]["href"];
    console.log(geonameID);
    res.send(geonameID);
  } catch (err) {
    console.log(err);
  }
});

router.post("/cities/salaries", async (req, res) => {
  const city = req.body.City;
  let url = `https://api.teleport.org/api/cities/?search=${city}
                &embed=city:search-results/city:item/city:urban_area/ua:salaries`;
  const encodedURI = encodeURI(url);

  try {
    const result = await axios.get(encodedURI);
    const salaryArray =
      result.data._embedded["city:search-results"][0]["_embedded"]["city:item"][
        "_embedded"
      ]["city:urban_area"]["_embedded"]["ua:salaries"]["salaries"];
    res.send(salaryArray);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
