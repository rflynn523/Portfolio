import React from 'react';
import ProjectGrid from './ProjectGrid';
import ProjectList from './ProjectList';
import budgetGUI from '../../../images/New_Month.JPG'

class ProjectPage extends React.Component
{
    test_Project = 
    {
        title : "Budget GUI",
        image : budgetGUI,
        description : "A Desktop GUI Application that assists with a personal budget MicroSoft Excel Spreadsheet.",
        technology : ["Python", "Tkinter", "PyCharm", "Python", "Tkinter", "PyCharm"],
        links : ""
    }
    others_Project = 
    {
        title : "Budget GUI",
        image : budgetGUI,
        description : "A Desktop GUI Application that assists with a personal budget MicroSoft Excel Spreadsheet.",
        technology : ["Python", "Tkinter", "PyCharm"],
        links : ""
    }

    all_Projects = [this.others_Project, this.test_Project, this.test_Project, this.test_Project,this.test_Project, this.test_Project, this.test_Project, this.test_Project]

    render()
    {
        // Add the buttons to switch the views 
        // Possibly only need to change the class name to switch the layout from grid to list??
        return (<div>
                View Option Goes Here
                <ProjectGrid allProjects = {this.all_Projects}/>
                    
            </div>)
    }
}

export default ProjectPage;