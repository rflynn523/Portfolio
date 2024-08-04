import React from 'react';
import './Project.css'


class ProjectTitleCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        // Call the switchToSelectedGrid(id) function to expand the project
        this.props.onClick(this.props.projectID)
    }

    render()
    {
        return <div className="ProjectTitle" onClick={this.handleClick}>
                    <img className = "projectImg" src={this.props.project.image}/>

        <div className="title">
          {this.props.project.title}

          <img className="detailsIcon" src={more} />
        </div>

        <div className="description">{this.props.project.description}</div>
      </div>
    );
  }
}

export default ProjectTitleCard;
