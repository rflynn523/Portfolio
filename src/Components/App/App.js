import React, {useEffect} from 'react';
import ReactGA from 'react-ga'

import NavBar from '../NavBar/NavBar';
import Home from '../Pages/Home/Home';
import Skills from '../Pages/Skills/Skills';
import ProjectPage from '../Pages/Projects/ProjectPage';
import Education from '../Pages/Education/Education';
import './App.css';

// Top Component of the Web app that displays the nav bar, and the active page/component
// Also handles the switching of the active page
// (App)
class App extends React.Component 
{
  constructor(props)
  {
    super(props);

    this.updateActiveComponent = this.updateActiveComponent.bind(this);

    // Initially have it set to the Home page
    this.state = {activeComponent: <Home/> };
  }

  useEffect()
  {
    ReactGA.initialize('G-DNY6G9NVY7')

    // To report page view
    ReactGA.pageview('/')
  }

  // Function that updates and switch the active page
  updateActiveComponent(id)
  {
    let component;

    // Switch based on the className that is passed back as id
    switch(id)
    {
      case "Home":
        component = <Home/>
        break;

      case "Education":
        component = <Education/>;
        break;
    
      case "Skills":
        component = <Skills/>;
        break;

      case "Projects":
        component = <ProjectPage/>;
        break;

      default:
        component = <Home/>
    }

    // Set the new state with teh active component and it's name
    this.setState({activeComponent: component});
  }

  render()
  {
    return (
      <div className="App">
        {/* The font for the website */}
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>

        <NavBar class="navBar" onClick={this.updateActiveComponent} />
        {this.state.activeComponent}
      </div>
    );
  }
}

export default App;
