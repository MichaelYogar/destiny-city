const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/cities", async (req, res) => {
  const city = req.body.city;
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

// 15- Data Analyst; 16 - Data Scientist; 26 - IT Manager; 32 - Mobile Developer;
// 40 - PM; 41 - QA Engineer; 45 - SE; 46 - Sys Admin; 48 - UX Designer; 50 - Web Designer; 51 Web Developer
router.post("/cities/salaries", async (req, res) => {
  const city = req.body.city;
  let url = `https://api.teleport.org/api/cities/?search=${city}
                &embed=city:search-results/city:item/city:urban_area/ua:salaries`;
  const encodedURI = encodeURI(url);

  try {
    const result = await axios.get(encodedURI);
    const salaryArray =
      result.data._embedded["city:search-results"][0]["_embedded"]["city:item"][
        "_embedded"
      ]["city:urban_area"]["_embedded"]["ua:salaries"]["salaries"];

    // get salaries and title of all included jobs
    // can simply add to relevantJobs array if I want to display more jobs in the front end
    let relevantJobs = [15, 16, 26, 32, 40, 41, 45, 46, 48, 50, 51];

    const arr = [];
    let dict = {};
    for (let i = 0; i < relevantJobs.length; i++) {
      let obj = salaryArray[relevantJobs[i]];
      // dict[obj.job.title] = obj.salary_percentiles;
      arr.push(obj);
    }
    console.log(arr);

    res.send(arr);
  } catch (err) {
    console.log(err);
  }
});

router.post("/cities/ratings", async (req, res) => {
  const city = req.body.city;
  let url = `https://api.teleport.org/api/cities/?search=${city}
                &embed=city:search-results/city:item/city:urban_area/ua:scores`;
  const encodedURI = encodeURI(url);

  try {
    const result = await axios.get(encodedURI);
    const array =
      result.data._embedded["city:search-results"][0]["_embedded"]["city:item"][
        "_embedded"
      ]["city:urban_area"]["_embedded"]["ua:scores"]["categories"];
    res.send(array);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
