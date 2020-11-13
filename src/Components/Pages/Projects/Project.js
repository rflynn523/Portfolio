<<<<<<< HEAD
import React from 'react';
import '../Projects/Project.css'
import ProjectTitleCard from './ProjectTitleCard';
import ProjectDetailsCard from './ProjectDetailsCard'

class Project extends React.Component
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
            this.setState({class : "Details", active : <ProjectDetailsCard project={this.props.project}/>});

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

=======
import React from 'react';
import '../Projects/Project.css'
import ProjectTitleCard from './ProjectTitleCard';
import ProjectDetailsCard from './ProjectDetailsCard'

class Project extends React.Component
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
            this.setState({class : "Details", active : <ProjectDetailsCard project={this.props.project}/>});

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

>>>>>>> 73704cb934f6d9e8c274d8aae1fa5fd67243a313
export default Project