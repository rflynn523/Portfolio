import React from 'react';
import ProjectBox from './ProjectBox';
import './ProjectGrid.css';
import UnselectedProjectGrid from './UnselectedProjectGrid';
import SelectedProjectGrid from './SelectedProjectGrid';

// Project Grid component that maps all of the projects to a Project Box
// (App -> ProjectPage -> ProjectGrid)
//              - allProjects, icons
class ProjectGrid extends React.Component
{

    constructor(props)
    {
        super(props);
        this.switchToSelected = this.switchToSelected.bind(this);
        this.switchToUnSelected = this.switchToUnSelected.bind(this);

        this.state = { activeState: <UnselectedProjectGrid allProjects={this.props.allProjects} onUnselected={this.switchToSelected}/>};
        // this.state = {activeState: <SelectedProjectGrid allProjects={this.props.allProjects} onSelected={this.switchToUnSelected}/>}; // active={id}

    }

    // This method handles switching the view from unselected to the selected card
    switchToSelected(id)
    {
        this.setState({activeState: <SelectedProjectGrid allProjects={this.props.allProjects} onSelected={this.switchToUnSelected} onUnselected={this.switchToSelected} active={id}/>}); // active={id}
    }

    // Switches the view back to unselected
    switchToUnSelected()
    {
        this.setState({activeState : <UnselectedProjectGrid allProjects={this.props.allProjects} onUnselected={this.switchToSelected}/>});
    }



    render()
    {
        // Have a loop/map functions that just creates all of the project boxes
        return(
                    <div className="Project_Grid_View">
                        {this.state.activeState}
                        {/* // this.props.allProjects.map((project) => { */}
                        {/* //     return <ProjectBox project={project} icons={this.props.icons} /> */}
                        {/* //     }) */}
                    </div>
              )
    }
}

export default ProjectGrid;