import React from "react";

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props; // Destructure `project` from props

    return (
      <div>
        <h2 className="text-xl font-bold">{project.title}</h2>
      </div>
    );
  }
}

export default ProjectCard;
