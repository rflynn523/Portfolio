import React from 'react';
import NavBar from '../NavBar/NavBar';
import Home from '../Pages/Home/Home';
import Skills from '../Pages/Skills/Skills';
import ProjectPage from '../Pages/Projects/ProjectPage';
import Education from '../Pages/Education/Education';
import Contact from '../Pages/Contact/Contact';
import './App.css';

class App extends React.Component 
{
  constructor(props)
  {
    super(props);

    this.updateActiveComponent = this.updateActiveComponent.bind(this);

    this.state = {
                    activeComponent: <Home class="Home" onClick={this.updateActiveComponent}/>,
                    componentName: "PageList"
                };

  }

  updateActiveComponent(id)
  {
    let component;
    let name;
    switch(id)
    {
      case "Skills":
      {
        component = <Skills/>;
        name = "Skills";
        break;
      }

      case "Education":
      {
        component = <Education />;
        name = "Education";
        break;
      }

      case "Projects":
      {
        component = <ProjectPage />;
        name = "Projects";
        break;
      }

      case "Contact":
      {
        component = <Contact />;
        name = "Contact";
        break;
      }

      case "Home":
        component = <Home onClick={this.updateActiveComponent}/>
        name = "Home";
        break;

      default:
        component = <Home onClick={this.updateActiveComponent}/>
        name = "Home";
        
    }


    this.setState({
                    activeComponent: component,
                    componentName: name
                  });
  }

  render()
  {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&family=Sura&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Cardo&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>

        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>




        <NavBar class="navBar" isActive={true} activeComponent={this.state.componentName} onClick={this.updateActiveComponent} />
        {this.state.activeComponent}
      </div>
    );
  }
}

export default App;
