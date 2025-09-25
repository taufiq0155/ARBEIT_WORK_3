import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Award from "./Award";
import MoreAbout from "./MoreAbout";
import Reference from "./Reference";

const Resume = () => {
  return (
    <section id="resume" className="mt-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow">
          <div className="p-8">
            <Experience />
          </div>

          <div className="border-t border-gray-200">
            <div className="p-8">
              <Skills />
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="p-8">
              <Award />
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="p-8">
              <MoreAbout />
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="p-8">
              <Reference />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
