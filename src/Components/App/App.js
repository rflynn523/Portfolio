import React, { useEffect } from "react";

import NavBar from "../NavBar/NavBar";
import AboutMe from "../Sections/AboutMe/AboutMe";
import Projects from "../Sections/Projects/Projects";
import Work from "../Sections/Work/Work";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-middarkside2 via-teal5 to-middarkside2 min-h-screen text-app-text-color">
        <NavBar className="navBar" />

        <section id="About Me">
          <AboutMe />
        </section>

        <section id="Projects">
          <Projects />
        </section>

        <section id="Work">
          <Work />
        </section>
      </div>
    );
  }
}

export default App;
