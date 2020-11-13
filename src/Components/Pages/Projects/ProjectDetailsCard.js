<<<<<<< HEAD
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

=======
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

>>>>>>> 73704cb934f6d9e8c274d8aae1fa5fd67243a313
export default ProjectDetailsCard