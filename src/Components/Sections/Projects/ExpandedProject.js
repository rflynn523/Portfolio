import React from 'react';
import './ProjectGrid.css';


class ExpandedProject extends React.Component
{

    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        // Call the switchToUnSelectedGrid() function to hide the project's expanded component
        this.props.onClick()
    }

    render()
    {
        return(
                <div className="Project_Grid_View" onClick={this.handleClick}>
                    <h3>ExpandedProject {this.props.project.title}</h3>
                </div>
              )
    }
}

export default ExpandedProject;