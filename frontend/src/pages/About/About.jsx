// src/pages/About.jsx
import React from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Price from "./Price";
import Brand from "./Brand";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="mt-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow p-8 relative">
            {/* Title */}
            <div className="border-b pb-10 mb-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <h2 className="text-3xl font-bold relative pl-6">About Me</h2>
                <p className="text-gray-600 max-w-xl text-left">
                  Eva cididunt ut labor et dolor magna antiqua. Ut ad enum ad
                  dolor sit amat consenter adipisicing eliot antiqua.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src="images/about/personal-img.jpg"
                  alt="About"
                  className="rounded-xl shadow-lg w-80 object-cover"
                />
              </div>

              {/* About Details & Text */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Text */}
                  <div className="space-y-6">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua veniam, quis nostrud xer cita tion ullamco laboris
                      nisi ut aliquip.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat m veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                    <p>
                      Aute velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium.
                    </p>
                  </div>

                  {/* Right Info */}
                  <div className="pl-6">
                    <ul className="flex gap-8 mb-8">
                      <li className="space-y-5 font-semibold text-indigo-600">
                        <span className="block">Name</span>
                        <span className="block">Email</span>
                        <span className="block">Phone</span>
                        <span className="block">Address</span>
                        <span className="block">Education</span>
                        <span className="block">Languages</span>
                        <span className="block">Nationality</span>
                        <span className="block">Freelance</span>
                      </li>
                      <li className="space-y-5 text-gray-700">
                        <span className="block">James Anderson</span>
                        <span className="block">hellojames@gmail.com</span>
                        <span className="block">+123 456 7890</span>
                        <span className="block">20, Bordeshi, Amin Bazar</span>
                        <span className="block">B.Sc in Physics</span>
                        <span className="block">English, Bangla</span>
                        <span className="block">Bangladeshi</span>
                        <span className="block">Available</span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*Components */}
            <Service />
            <Testimonial />
            <Price />
            <Brand />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
