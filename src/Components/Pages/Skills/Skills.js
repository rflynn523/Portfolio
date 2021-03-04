import React from 'react';
import './Skills.css';
import SelectedSkill from './SelectedSkill';
import UnSelectedSkills from './UnSelectedSkills';

// Can update all of the Skills Page Information in this Component and it will be passed through props
// Only need to change the cases in switchSelection and possibly the addition/removal of a card

// (App -> Skills)
class Skills extends React.Component
{
    // Create objects for each category to make the code more readable.
    // Each category object will have the title, the skills, and the details that go along with that skill
    progLanguages_Object = 
    {
        title : "Programming Languages",
        items : {
            "Java" : "6 Courses - 4 Projects",
            "Python" : "1 Course - 3 Projects - Codecademy",
            "C" : "4 Courses - 2 Projects",
            "C++" : "1 Course - Codecademy",
            "SQL" : "2 Courses - 2 Projects",
            "JavaScript" : "1 Course - 2 Projects - Codecademy",
            "HTML" : "1 Course - 2 Projects",
            "CSS" : "1 Course - 1 Projects - Codecademy",
            "Haskell" : "1 Course", 
            "Erlang" : "1 Course",
            "MIPS Assembly Language" : "1 Course"
        }
    }

    IDEs_Object = 
    {
        title : "IDEs",
        items : {
            "Visual Studio Code" : "2 Courses - Various Projects", 
            "Atom" : "4 Courses", 
            "Android Studio" : "2 Courses - 2 Projects", 
            "PyCharm" : "1 Project - 1 Course", 
            "Eclipse" : "1 Course", 
            "Code Composer Studio" : "2 Courses - 1 Project", 
            "Google Colab" : "1 Course - 1 Project"
        }
    }

    libraries_Object = 
    {
        title : "Libraries/Frameworks",
        items : {
            "ReactJS" : "2 Projects - Codecademy", 
            "Tkinter" : "1 Project", 
            "Java Swing" : "1 Course - 2 Projects", 
            "OpenCV" : "1 Course", 
            "Openpyxl" : "1 Project", 
            "Apache Tomcat" : "2 Courses - 2 Projects"
        }
    }

    databases_Object = 
    {
        title : "Databases",
        items : {
            "MySQL" : "2 Courses - 2 Projects", 
            "Google Firebase" : "1 Course - 1 Project"
        }
    }

    hardware_Object = 
    {
        title : "Hardware Programming",
        items : {
            "Raspberry Pi" : "1 Project", 
            "MSP-EXP430 G2 and FR6989" : "3 Courses - 3 Projects",  
            "FPGA BASYS Board" : "1 Course", 
            "Boe-Bot" : "2 Courses"
        }
    }

    circuitSim_Object = 
    {
        title : "Circuit Simulation",
        items : {
            "Multisim" : "2 Courses - 2 Labs", 
            "Xilinix" : "1 Course - 1 Lab", 
            "Breadboards" : "2 Courses - 2 Labs - 2 Projects"
        }
    }

    other_Object = 
    {
        title : "Other",
        items : {
            "Github" : "3 Courses - 3 Projects",
            "Microsoft Office" : ""
        }
    }
    
    // Array of all the bojects
    Objects = [this.progLanguages_Object, this.IDEs_Object, this.libraries_Object, this.databases_Object,
                this.hardware_Object, this.circuitSim_Object, this.other_Object];

    constructor(props)
    {
        super(props);
        this.switchToSelected = this.switchToSelected.bind(this);
        this.switchToUnSelected = this.switchToUnSelected.bind(this);

        this.state = { activeState: <UnSelectedSkills allObjects={this.Objects} onUnselected={this.switchToSelected}/>};
    }

    // This method handles switching the view from unselected to the selected card
    switchToSelected(id)
    {
        this.setState({activeState: <SelectedSkill allObjects={this.Objects} onSelected={this.switchToUnSelected} active={id}/>}); // active={id}
    }

    // Switches the view back to unselected
    switchToUnSelected()
    {
        this.setState({activeState : <UnSelectedSkills allObjects={this.Objects} onUnselected={this.switchToSelected}/>});
    }

    render()
    {
        return(<div className="skills">{this.state.activeState}</div>)       
    }
}

export default Skills;