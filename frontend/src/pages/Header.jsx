// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <>
      {/* Header Section */}
      <header className="py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div id="logo">
            <a href="/">
              <img
                src="images/logo/logo.png"
                alt="ProCv"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Download Button */}
          <a
            href="#"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded font-bold capitalize hover:opacity-90 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* Hero / Profile Section */}
      <div
        id="profile"
        className="relative rounded-xl overflow-hidden bg-cover bg-center min-h-[80vh]"
        style={{ backgroundImage: "url('images/hero/hero-bg-img.jpg')" }}
      >
        {/* Background Shapes */}
        <div className="absolute w-full h-full pointer-events-none">
          <img
            data-depth="0.20"
            className="absolute top-[10%] left-[5%] hidden md:block"
            src="images/hero/shape1.png"
            alt="shape1"
          />
          <img
            data-depth="0.20"
            className="absolute bottom-[10%] right-[5%] hidden md:block"
            src="images/hero/shape2.png"
            alt="shape2"
          />
        </div>

        {/* Hero Content */}
        <div className="flex items-center justify-center w-full h-full relative z-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-12 gap-10">
            {/* Profile Image */}
            <div className="flex justify-center">
              <img
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white shadow-lg"
                src="images/hero/hero-img1.jpg"
                alt="Emily Jenifer Smith"
              />
            </div>

            {/* Profile Text */}
            <div className="text-center md:text-left">
              <h1 className="text-white font-bold text-4xl md:text-5xl mb-6">
                Emily <span className="block">Jenifer</span> Smith
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <h3 className="text-white text-lg md:text-xl">
                  Creative Designer <br />
                  From Dhaka
                </h3>

                {/* Circular Button */}
                <div className="relative inline-block cursor-pointer transition-transform duration-500 hover:scale-110">
                  <img
                    className="w-12 h-12 animate-spin-slow"
                    src="images/hero/circular-btn.png"
                    alt="circular button"
                  />
                  <a
                    href="#about"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <img
                      className="w-4 h-4"
                      src="images/hero/right-up.png"
                      alt="about"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="py-4 bg-white shadow">
        <ul className="flex items-center justify-center flex-wrap gap-6 md:gap-10">
          {[
            { href: "#profile", text: "Home" },
            { href: "#about", text: "About" },
            { href: "#resume", text: "Resume" },
            { href: "#portfolio", text: "Portfolio" },
            { href: "#blog", text: "Blog" },
            { href: "#contact", text: "Contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
