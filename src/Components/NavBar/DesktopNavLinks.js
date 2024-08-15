import React from "react";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

class DesktopNavLinks extends React.Component {
  render() {
    return (
      <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg">
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
    );
  }
}

export default DesktopNavLinks;
