import React from "react";
import ReactGA from "react-ga";

import "./NavBar.css";
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa";
import savingsMapperPrivacyPolicy from "./Privacy Policy.pdf";
import resumePDF from "./Ryan Flynn Resume.pdf";

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
    this.setState({ isScrolled: window.scrollY > 10 });
  }

  render() {
    return (
      <nav className="fixed w-full h-fit top-0 z-50 bg-gradient-to-r from-middarkside2 via-teal5 to-middarkside2">
        <div
          className={`transition-all ease-in-out duration-700 ${
            this.state.isScrolled ? "pt-0" : "pt-6"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center py-5">
            {/* Jump To Buttons */}
            <div className="flex flex-1 space-x-8 text-lg">
              <button
                className="underline-from-center"
                onClick={() => scrollToSection("About Me")}
              >
                Home
              </button>

              <button
                className="underline-from-center"
                onClick={() => scrollToSection("Technologies")}
              >
                Technologies
              </button>
              <button
                className="underline-from-center"
                onClick={() => scrollToSection("Projects")}
              >
                Projects
              </button>
              <button
                className="underline-from-center"
                onClick={() => scrollToSection("Experiences")}
              >
                Experiences
              </button>
            </div>

            {/* Name */}
            <div className="text-nav-bar-font-color poppins-semibold tracking-wide absolute left-1/2 transform -translate-x-1/2">
              <div
                className={`transition-all ease-in-out duration-700 ${
                  this.state.isScrolled ? "text-4xl" : "text-6xl"
                }`}
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
                className="hover:text-linked-in-blue transition-colors duration-300"
                onClick={(e) =>
                  ReactGA.event({
                    category: "Link Clicked",
                    action: "LinkedIn",
                  })
                }
              >
                <FaLinkedin className="size-8" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rflynn523"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-github-green transition-colors duration-300"
                onClick={(e) =>
                  ReactGA.event({
                    category: "Link Clicked",
                    action: "Github Profile",
                  })
                }
              >
                <FaGithub className="size-8" />
              </a>

              {/* Resume */}
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-adobe-red transition-colors duration-300"
              >
                <FaFilePdf className="size-8" />
              </a>

              {/* Email */}
              <a
                href="mailto:rflynn0523@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-golden-yellow transition-colors duration-300"
              >
                <FaEnvelope className="size-8" />
              </a>
              {/* <a href={savingsMapperPrivacyPolicy} target="_blank">
              Savings Mapper Privacy Policy
            </a> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
