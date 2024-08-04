import React from "react";

// Icons
import githubIcon from "../../../images/GitHub-Logo.png";
import youtubeIcon from "../../../images/youtubeIcon.png";
import appStore from "../../../images/appStoreIcon.png";
import project_data from "./project-data";

class ProjectPage extends React.Component {
  icons = { GitHub: githubIcon, Youtube: youtubeIcon, AppStore: appStore };
  all_Projects = [
    project_data.BudgetAssistant,
    project_data.SavingsMapper,
    project_data.PetConnect,
    project_data.BudgetGUI,
    project_data.ResumeWebApp,
    project_data.MultiFuncLED,
    project_data.EscapeRoom,
    project_data.GroupBuy,
    project_data.SQLGUI,
    project_data.WheresWaldo,
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
      <div>
        {/* <ProjectGrid allProjects={this.all_Projects} icons={this.icons} /> */}
        Projects go here
      </div>
    );
  }
}

export default ProjectPage;
