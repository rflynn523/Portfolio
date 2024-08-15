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

class DesktopContactLinks extends React.Component {
  render() {
    return (
      <div className="hidden sm:flex flex-wrap justify-center space-x-4 md:space-x-6 mt-4 md:mt-0">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ryan-flynn-5b0a56170/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-linked-in-blue transition-colors duration-300"
        >
          <FaLinkedin className="size-8" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rflynn523"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-github-green transition-colors duration-300"
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
    );
  }
}

export default DesktopContactLinks;
