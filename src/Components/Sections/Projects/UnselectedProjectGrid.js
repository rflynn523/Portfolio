import React from 'react';
import ProjectBox from './ProjectBox';
import './ProjectGrid.css';
import ProjectTitleCard from './ProjectTitleCard';



// Project Grid component that maps all of the projects to a Project Box
// (App -> ProjectPage -> ProjectGrid)
//              - allProjects, icons
class UnselectedProjectGrid extends React.Component
{
    render()
    {
        // Have a loop/map functions that just creates all of the project boxes
        return(
                    <div className="Project_Grid_View" >
                    {
                        this.props.allProjects.map((project, index) => {
                            return <ProjectTitleCard project={project} projectID={index} onClick={this.props.onUnselected}/>
                            })
                    }
                    </div>
              )
    }
}

export default UnselectedProjectGrid;