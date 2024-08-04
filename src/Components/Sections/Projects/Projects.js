import React from "react";

// Icons
import githubIcon from "../../../images/GitHub-Logo.png";
import youtubeIcon from "../../../images/youtubeIcon.png";
import appStore from "../../../images/appStoreIcon.png";
import project_data from "./project-data";

import ProjectCard from "./ProjectCard";

class Projects extends React.Component {
  icons = { GitHub: githubIcon, Youtube: youtubeIcon, AppStore: appStore };
  all_Projects = [
    project_data.BudgetAssistant,
    project_data.SavingsMapper,
    project_data.PetConnect,
    project_data.ResumeWebApp,
  ];

  // Constructor needed to set up switchview function and state
  // constructor(props) {
  //   super(props);
  //   this.switchView = this.switchView.bind(this);
  //   this.state = {
  //     activeComponentId: "Grid View",
  //     activeComponent: (
  //       <ProjectGrid allProjects={this.all_Projects} icons={this.icons} />
  //     ),
  //   };
  // }

  // Function used to swtich view between grid and list
  // switchView() {
  //   if (this.state.activeComponentId == "List View") {
  //     this.setState({
  //       activeComponentId: "Grid View",
  //       activeComponent: (
  //         <ProjectGrid allProjects={this.all_Projects} icons={this.icons} />
  //       ),
  //     });
  //   } else {
  //     this.setState({
  //       activeComponentId: "List View",
  //       activeComponent: (
  //         <ListCard allObjects={this.all_Projects} icons={this.icons} />
  //       ),
  //     });
  //   }
  // }

  render() {
    return (
      <div className="text-center text-app-text-color py-8">
        {this.all_Projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
