import React from 'react';
import NavBar from '../NavBar/NavBar';
import Home from '../Pages/Home/Home';
import Skills from '../Pages/Skills/Skills';
import ProjectPage from '../Pages/Projects/ProjectPage';
import Education from '../Pages/Education/Education';
import Contact from '../Pages/Contact/Contact';
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
    this.state = {activeComponent: <Home class="Home" onClick={this.updateActiveComponent}/> };
  }

  // Function that updates and switch the active page
  updateActiveComponent(id)
  {
    let component;

    // Switch based on the className that is passed back as id
    switch(id)
    {
      case "Home":
        component = <Home onClick={this.updateActiveComponent}/>
        break;

      case "Education":
      {
        component = <Education />;
        break;
      }
    
      case "Skills":
      {
        component = <Skills/>;
        break;
      }

      case "Projects":
      {
        component = <ProjectPage />;
        break;
      }

      case "Contact":
      {
        component = <Contact />;
        break;
      }

      default:
        component = <Home onClick={this.updateActiveComponent}/>
    }

    // Set the new state with teh active component and it's name
    this.setState({activeComponent: component});
  }

  render()
  {
    return (
      <div className="App">
        {/* Include all of the hrefs here could prob move them to index? 
            All Not needed???   */}
        <link href="https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&family=Sura&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Cardo&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>


        <NavBar class="navBar" onClick={this.updateActiveComponent} />
        {this.state.activeComponent}
      </div>
    );
  }
}

export default App;
