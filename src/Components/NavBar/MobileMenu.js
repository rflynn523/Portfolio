import React from "react";
import { FaTimes } from "react-icons/fa";
import "./NavBar.css";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-teal5 transition-transform duration-500 ease-in-out transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="absolute top-4 right-4">
        <button
          className="text-white text-3xl hover:text-gray-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center space-y-6 py-10 text-lg">
        <button
          className="underline-from-center"
          onClick={() => {
            scrollToSection("About Me");
            toggleMenu();
          }}
        >
          Home
        </button>
        <button
          className="underline-from-center"
          onClick={() => {
            scrollToSection("Technologies");
            toggleMenu();
          }}
        >
          Technologies
        </button>
        <button
          className="underline-from-center"
          onClick={() => {
            scrollToSection("Projects");
            toggleMenu();
          }}
        >
          Projects
        </button>
        <button
          className="underline-from-center"
          onClick={() => {
            scrollToSection("Experiences");
            toggleMenu();
          }}
        >
          Experiences
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
