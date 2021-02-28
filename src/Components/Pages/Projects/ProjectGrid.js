import React from 'react';
import ProjectBox from './ProjectBox';
import './ProjectGrid.css';

// Project Grid component that maps all of the projects to a Project Box
// (App -> ProjectPage -> ProjectGrid)
//              - allProjects
class ProjectGrid extends React.Component
{
    render()
    {
        // Have a loop/map functions that just creates all of the project boxes
        return(
                    <div className="Project_Grid_View">
                    {this.props.allProjects.map((project) => {return <ProjectBox project={project}/>})}
                    </div>
              )
    }
}

export default ProjectGrid;