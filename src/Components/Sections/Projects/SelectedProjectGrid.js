import React from 'react';
import ProjectBox from './ProjectBox';
import './ProjectGrid.css';
import ProjectDetailsCard from './ProjectDetailsCard';
import ExpandedProject from './ExpandedProject';
import ProjectTitleCard from './ProjectTitleCard';



// Project Grid component that maps all of the projects to a Project Box
// (App -> ProjectPage -> ProjectGrid)
//              - allProjects, icons
class SelectedProjectGrid extends React.Component
{
    render()
    {
        // Have a loop/map functions that just creates all of the project boxes
        return(
                    <div className="Project_Grid_View" >
                    {

                        this.props.allProjects.map((project, index) => {
                            if (this.props.active == index)
                            {
                                return <ExpandedProject project={project} projectID={index} isProjectExpanded={this.props.active == index} onClick={this.props.onSelected}/>

                            }

                            else
                            {
                                return <ProjectTitleCard project={project} projectID={index} onClick={this.props.onUnselected}/>
                            }

                        })
                    }
                    </div>
              )
    }
}

export default SelectedProjectGrid;