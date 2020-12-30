import React, { useContext } from "react";
import Hero from "../Hero/Hero";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <NavBar />
      <Hero {...homeObjOne} />
      <Footer />
    </>
  );
}

export default Home;
