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

import { useState, useEffect } from "react";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 5) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  render() {
    // To report page view
    ReactGA.pageview("/Contact");

    return (
      // Nav bar style that does not match the gradient back ground
      // <nav className="fixed w-full h-fit top-0 z-50 bg-nav-bar-color3 bg-opacity-70 backdrop-blur-md py-5 text-app-text-color">

      <nav className="fixed w-full h-fit top-0 z-50 bg-gradient-to-r from-middarkside2 via-teal5 to-middarkside2 text-nav-bar-font-color">
        <div className="container mx-auto flex justify-between items-center py-5" >
          {/* Jump To Buttons */}
          <div className="flex flex-1 space-x-8 text-nav-bar-font-color text-lg">
            <button onClick={() => scrollToSection("Home")}>Home</button>
            <button onClick={() => scrollToSection("About Me")}>
              About Me
            </button>
            <button onClick={() => scrollToSection("Projects")}>
              Projects
            </button>
            <button onClick={() => scrollToSection("Work")}>Work</button>
          </div>

          {/* Name */}
          <div className="text-nav-bar-font-color poppins-semibold tracking-wide absolute left-1/2 transform -translate-x-1/2">
            <div
              className={`transition-all ease-in-out duration-700 ${this.state.isScrolled ? "text-4xl" : "text-6xl"}`}
            >
              Ryan Flynn
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex space-x-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ryan-flynn-5b0a56170/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              onClick={(e) =>
                ReactGA.event({ category: "Link Clicked", action: "LinkedIn" })
              }
            >
            <FaLinkedin className="size-8" />
            </a>

            {/* GitHub */}
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
              <FaGithub className="size-8"/>
            </a>

            {/* Resume */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFilePdf className="size-8"/>
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
