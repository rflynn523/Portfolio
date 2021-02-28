import React from 'react';
import '../Projects/Project.css'
import ProjectTitleCard from './ProjectTitleCard';
import ProjectDetailsCard from './ProjectDetailsCard'

// Project box component that display each project in the grid/box view and switches to the details view
// (App -> ProjectPage -> ProjectGrid -> ProjectBox)
//                          - project

class ProjectBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.showDetails = this.showDetails.bind(this);

        this.state = {class : "Title", active : <ProjectTitleCard project={this.props.project}/>};
    }

    showDetails()
    {
        if(this.state.class === "Title")
            this.setState({class : "Details", active : <ProjectDetailsCard project={this.props.project} icons={this.props.icons}/>});

        else
            this.setState({class : "Title", active : <ProjectTitleCard project={this.props.project}/>})
    }

    render()
    {
       // Need to add the more details with the on click
        return <div onClick={this.showDetails}>
                    {this.state.active}
                 </div>
    }
}

export default ProjectBox