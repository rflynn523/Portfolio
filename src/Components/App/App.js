import React, { useEffect } from 'react';
import ReactGA from 'react-ga'

import NavBar from '../NavBar/NavBar';
import Home from '../Sections/Home/Home';
import AboutMe from '../Sections/AboutMe/AboutMe';
import ProjectPage from '../Sections/Projects/ProjectPage';
import Work from '../Sections/Work/Work';
import Contact from '../Sections/Contact/Contact'
import './App.css';

// Top Component of the Web app that displays the nav bar, and the active page/component
// Also handles the switching of the active page
// (App)
class App extends React.Component 
{
  render()
  {
    return (
      <div className="App">
        {/* The font for the website */}
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>

        <NavBar class="navBar"/> 
        <Home />
        <AboutMe />
        <ProjectPage />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
