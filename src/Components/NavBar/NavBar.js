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
import MobileMenu from "./MobileMenu";

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
      isMenuOpen: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
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

  toggleMenu() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  render() {
    return (
      <nav className="fixed w-full h-fit top-0 z-50 bg-gradient-to-r from-middarkside2 via-teal5 to-middarkside2">
        <div
          className={`transition-all ease-in-out duration-700 ${
            this.state.isScrolled ? "pt-0" : "pt-3 sm:pt-6"
          }`}
        >
          <div className="container mx-auto flex items-center py-4 md:py-5 px-4 relative">
            {/* Hamburger Menu Icon */}
            <div className="block md:hidden">
              <button className="text-white text-3xl" onClick={this.toggleMenu}>
                {this.state.isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex  justify-center space-x-8 text-lg">
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
            <div className="flex-1 text-nav-bar-font-color poppins-semibold tracking-wide text-center">
              <div
                className={`transition-all ease-in-out duration-700 ${
                  this.state.isScrolled
                    ? "text-2xl sm:text-3xl md:text-4xl"
                    : "text-4xl sm:text-5xl md:text-6xl"
                }`}
              >
                Ryan Flynn
              </div>
            </div>

            {/* Contact Links */}
            <div className="hidden lg:flex space-x-6">
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

            {/* Mobile Menu */}
            <MobileMenu
              isMenuOpen={this.state.isMenuOpen}
              toggleMenu={this.toggleMenu}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
