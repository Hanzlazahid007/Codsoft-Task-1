import React from "react";
import Title from "./Title";
import About from "./About";
import Project from "./Project";

import Service from "./Service";
import Contact from "./Contact";
// import "@fontsource/poppins"

const Home = () => {
  return (
    <>
      <Title />
      <About />
      {/* <Project /> */}
      <Service />
      <Contact />
    </>
  );
};

export default Home;
