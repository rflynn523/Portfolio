import React from "react";
import "./ProjectGrid.css";
import ExpandedProject from "./Old structure/ExpandedProject";
import ProjectTitleCard from "./ProjectTitleCard";

class SelectedProjectGrid extends React.Component {
  render() {
    return (
      <div className="Project_Grid_View">
        {this.props.allProjects.map((project, index) => {
          if (this.props.active == index) {
            // Show the active's project expanded component
            return (
              <ExpandedProject
                project={project}
                projectID={index}
                isProjectExpanded={this.props.active == index}
                onClick={this.props.onSelectedGrid}
              />
            );
          } else {
            // Show the project title card if the project isn't active
            return (
              <ProjectTitleCard
                project={project}
                projectID={index}
                onClick={this.props.onUnselectedGrid}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default SelectedProjectGrid;
