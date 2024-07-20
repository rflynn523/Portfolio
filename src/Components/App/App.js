import React, { useEffect } from "react";
import ReactGA from "react-ga";

import NavBar from "../NavBar/NavBar";
import Home from "../Sections/Home/Home";
import AboutMe from "../Sections/AboutMe/AboutMe";
import ProjectPage from "../Sections/Projects/ProjectPage";
import Work from "../Sections/Work/Work";
import "./App.css";

// Top Component of the Web app that displays the nav bar, and the active page/component
// Also handles the switching of the active page
// (App)
class App extends React.Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-middarkside2 via-teal5 to-middarkside2">
        {/* The font for the website */}
        <link
          href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"
          rel="stylesheet"
        />

        <NavBar className="navBar" />

        <section id="Home">
          <Home />
        </section>

        <section id="About Me">
          <AboutMe />
        </section>

        <section id="Projects">
          <ProjectPage />
        </section>

        <section id="Work">
          <Work />
        </section>

      </div>
    );
  }
}

export default App;
