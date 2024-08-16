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
      <div className="pt-20 xl:pt-24 mx-4 md:mx-auto md:px-16 lg:px-32 space-y-8">
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
