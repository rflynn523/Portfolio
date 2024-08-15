import React from "react";
import project_data from "./project-data";
import ProjectCard from "./ProjectCard";

import Title from "../../Title";

class Projects extends React.Component {
  all_Projects = [
    project_data.SavingsMapper,
    project_data.Portfolio,
    project_data.BudgetAssistant,
    project_data.PetConnect,
    // project_data.BudgetGUI,
    // project_data.MultiFuncLED,
    // project_data.EscapeRoom,
    // project_data.GroupBuy,
    // project_data.SQLGUI,
    // project_data.WheresWaldo,
  ];

  render() {
    return (
      <div className="mx-4 md:mx-auto pb-0 md:p-16 lg:p-32 space-y-8">
        <Title text="Projects" />
        {this.all_Projects.map((project, index) => (
          <div key={index} className="w-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
