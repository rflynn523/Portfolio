import React from "react";
import ReactGA from "react-ga";

import "./NavBar.css";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import mailIcon from "../../images/envelope.png";
import savingsMapperPrivacyPolicy from "./Privacy Policy.pdf";
import resumePDF from "./Ryan Flynn Resume.pdf";

import linkedInIcon from "../../images/LI-In-Bug.png";
import githubIcon from "../../images/GitHub-Logo.png";
import resumeIcon from "../../images/resumeIcno.png";


const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

class NavBar extends React.Component {
  render() {
    // To report page view
    ReactGA.pageview("/Contact");

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
              href="https://www.linkedin.com/in/ryan-flynn-5b0a56170/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              onClick={(e) =>
                ReactGA.event({ category: "Link Clicked", action: "LinkedIn" })
              }
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rflynn523"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              onClick={(e) =>
                ReactGA.event({
                  category: "Link Clicked",
                  action: "Github Profile",
                })
              }
            >
              <FaGithub />
            </a>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFilePdf />
            </a>
            {/* <a href={savingsMapperPrivacyPolicy} target="_blank">
            Savings Mapper Privacy Policy
          </a> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
