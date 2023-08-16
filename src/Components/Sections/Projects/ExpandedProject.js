import React from 'react';
import './ProjectGrid.css';
import ProjectDetailsCard from './ProjectDetailsCard';



// Project Grid component that maps all of the projects to a Project Box
// (App -> ProjectPage -> ProjectGrid)
//              - allProjects, icons
class ExpandedProject extends React.Component
{

    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.onClick()
    }

    render()
    {
        // Have a loop/map functions that just creates all of the project boxes
        return(
                    <div className="Project_Grid_View" onClick={this.handleClick}>
                        <h3>ExpandedProject {this.props.project.title}</h3>
                    {/* {
                        this.props.allProjects.map((project) => {
                            return <ProjectDetailsCard project={this.props.project} icons={this.props.icons}/>
                            })
                    } */}
                    </div>
              )
    }
}

export default ExpandedProject;