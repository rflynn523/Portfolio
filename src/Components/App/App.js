import React from "react";

import NavBar from "../NavBar/NavBar";
import AboutMe from "../sections_temp/AboutMe/AboutMe";
import Technologies from "../sections_temp/Technologies/Technologies";
import Projects from "../sections_temp/Projects/Projects";
import Experiences from "../sections_temp/Experiences/Experiences";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-middarkside2 via-teal5 to-middarkside2 min-h-screen text-app-text-color">
        <NavBar className="navBar" />

        <section id="About Me">
          <AboutMe />
        </section>

        <section id="Technologies">
          <Technologies />
        </section>

        <section id="Projects">
          <Projects />
        </section>

        <section id="Experiences">
          <Experiences />
        </section>
      </div>
    );
  }
}

export default App;
