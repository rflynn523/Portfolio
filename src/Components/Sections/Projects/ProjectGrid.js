import React from 'react';
import './ProjectGrid.css';
import UnselectedProjectGrid from './UnselectedProjectGrid';
import SelectedProjectGrid from './SelectedProjectGrid';


class ProjectGrid extends React.Component
{

    constructor(props)
    {
        super(props);
        this.switchToSelectedGrid = this.switchToSelectedGrid.bind(this);
        this.switchToUnSelectedGrid = this.switchToUnSelectedGrid.bind(this);

        this.state = { activeState: <UnselectedProjectGrid allProjects={this.props.allProjects} onUnselectedGrid={this.switchToSelectedGrid}/>};
    }

    // Switches the project grid so the selected project shows the expanded component, given the project's id.
    // When a project is already selected, that project's title card will be displayed and the new project's 
    // expanded component will be displayed.
    switchToSelectedGrid(id)
    {
        this.setState({activeState: <SelectedProjectGrid allProjects={this.props.allProjects} onSelectedGrid={this.switchToUnSelectedGrid} onUnselectedGrid={this.switchToSelectedGrid} active={id}/>}); // active={id}
    }

    // Switches the view back to unselected when the user clicks on the expanded component
    switchToUnSelectedGrid()
    {
        this.setState({activeState : <UnselectedProjectGrid allProjects={this.props.allProjects} onUnselectedGrid={this.switchToSelectedGrid}/>});
    }

    render()
    {
        return(
                <div className="Project_Grid_View">
                    {this.state.activeState}
                </div>
        )
    }
}

export default ProjectGrid;