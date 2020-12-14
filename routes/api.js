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

module.exports = router;
