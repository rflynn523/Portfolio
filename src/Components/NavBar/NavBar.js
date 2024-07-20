import React from "react";
import "./NavBar.css";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

class NavBar extends React.Component {
  render() {
    return (
      <nav className="bg-slate bg-opacity-10 backdrop-blur-lg p-5 text-app-text-color">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-1 space-x-4">
            <button onClick={() => scrollToSection("Home")} className="text-app-text-color">Home</button>
            <button onClick={() => scrollToSection("About Me")} className="text-app-text-color">About Me</button>
            <button onClick={() => scrollToSection("Projects")} className="text-app-text-color">Projects</button>
            <button onClick={() => scrollToSection("Work")} className="text-app-text-color">Work</button>
          </div>
          <div className="text-app-text-color text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
            Ryan Flynn
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub />
            </a>
            <a
              href="link-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFilePdf />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
