import React from 'react';
import './ProjectGrid.css';
import ProjectTitleCard from './ProjectTitleCard';

// Project Grid component that maps all of the projects to a Project Box
// (App -> ProjectPage -> ProjectGrid)
//              - allProjects, icons
class UnselectedProjectGrid extends React.Component
{
    render()
    {
        return(
                <div className="Project_Grid_View" >
                {
                    // No project is selected, so display all project title cards
                    this.props.allProjects.map((project, index) => {
                        return <ProjectTitleCard project={project} projectID={index} onClick={this.props.onUnselectedGrid}/>
                        })
                }
                </div>
              )
    }
}

export default UnselectedProjectGrid;