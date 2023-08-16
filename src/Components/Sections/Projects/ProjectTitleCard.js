import React from 'react';
import './Project.css'
import more from '../../../images/more.png'



class ProjectTitleCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.onClick(this.props.projectID)
    }

    render()
    {
        return <div className="ProjectTitle" onClick={this.handleClick}>
                    <img className = "projectImg" src={this.props.project.image}/>

                    <div className="title">
                        {this.props.project.title}
                    </div>
                
                    <div className="description">{this.props.project.description}</div>
                 </div>
    }
}

export default ProjectTitleCard