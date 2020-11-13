import React from 'react';
import '../Projects/Project.css'



class ProjectDetailsCard extends React.Component
{
    render()
    {
       // Need to add the more details with the on click
        return <div className="Details" onClick={this.props.onClick}>
                    {this.props.project.technology}
                 </div>
    }
}

export default ProjectDetailsCard