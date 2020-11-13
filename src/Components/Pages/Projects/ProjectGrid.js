<<<<<<< HEAD
import React from 'react';
import Project from './Project';
import './ProjectGrid.css';

class ProjectGrid extends React.Component
{
    render()
    {
        // Have a loop/map functions that just creates all of the project boxes
        return(
                    <div className="Project_Grid_View">
                    {this.props.allProjects.map((project) => {return <Project project={project}/>})}
                    </div>
              )
    }
}

=======
import React from 'react';
import Project from './Project';
import './ProjectGrid.css';

class ProjectGrid extends React.Component
{
    render()
    {
        // Have a loop/map functions that just creates all of the project boxes
        return(
                    <div className="Project_Grid_View">
                    {this.props.allProjects.map((project) => {return <Project project={project}/>})}
                    </div>
              )
    }
}

>>>>>>> 73704cb934f6d9e8c274d8aae1fa5fd67243a313
export default ProjectGrid;