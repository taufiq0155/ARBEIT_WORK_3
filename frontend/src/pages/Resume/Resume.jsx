import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Award from "./Award";
import MoreAbout from "./MoreAbout";
import Reference from "./Reference";

const Resume = () => {
  return (
    // Add id="resume" here
    <section id="resume">
      <Experience />
      <Skills />
      <Award />
      <MoreAbout />
      <Reference />
    </section>
  );
};

export default Resume;
