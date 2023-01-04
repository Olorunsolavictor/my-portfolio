// import { Container } from "@mui/material";
import React from "react";
import AboutText from "./AboutText";
import PictureCard from "./PictureCard";

function About() {
  return (
    <div
      //   maxWidth="md"
      //   sx={{ display: "flex" }}
      className="flex md:pt-[90px] sm:w-full md md:flex-row sm:flex-col md:justify-center sm:justify-evenly h-auto sm:py-10   text-center items-center md:w-[50%] "
      id="about"
    >
      <PictureCard />
      <AboutText />
    </div>
  );
}

export default About;
