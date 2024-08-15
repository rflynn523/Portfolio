import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import resumePDF from "./Ryan Flynn Resume.pdf";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gradient-to-r from-middarkside2 via-teal5 to-middarkside2 transition-transform transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
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

        {/* Contact Icons */}
        <div className="flex space-x-6 mt-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ryan-flynn-5b0a56170/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-linked-in-blue transition-colors duration-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rflynn523"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-github-green transition-colors duration-300"
          >
            <FaGithub className="text-3xl" />
          </a>

          {/* Resume */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-adobe-red transition-colors duration-300"
          >
            <FaFilePdf className="text-3xl" />
          </a>

          {/* Email */}
          <a
            href="mailto:rflynn0523@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-golden-yellow transition-colors duration-300"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
