import React from "react";
import ReactGA from "react-ga";

import engBuilding from "../../../images/ENGBuildingWebSize.jpg";
import TechUsedCard from "../../Card/TechUsedCard";
import { Grid, Container, Card, CardContent, Typography } from "@mui/material";

// Programming Languages
import python from "../../../images/tech_logos/languages/python-logo.png";
import java from "../../../images/tech_logos/languages/java-logo.svg";
import swift from "../../../images/tech_logos/languages/swift-logo.svg";
import javascript from "../../../images/tech_logos/languages/js-logo.png";
import go from "../../../images/tech_logos/languages/go-logo.png";
import rust from "../../../images/tech_logos/languages/rust-logo.png";
import cpp from "../../../images/tech_logos/languages/cpp-logo.svg";
import c from "../../../images/tech_logos/languages/c-logo.png";

// Libraries / Frameworks
import react from "../../../images/tech_logos/libraries/react-logo.png"
import pytest from "../../../images/tech_logos/libraries/pytest-logo.png"
import pydantic from "../../../images/tech_logos/libraries/pydantic-logo.svg"
import kafka from "../../../images/tech_logos/libraries/kafka-logo.png"
import tailwinds from "../../../images/tech_logos/libraries/tailwind-logo.png"
import swiftui from "../../../images/tech_logos/libraries/swiftui-logo.png"


// Tools
import vscode from "../../../images/tech_logos/tools/vscode-logo.png";
import xcode from "../../../images/tech_logos/tools/xcode-logo.svg";
import android_studio from "../../../images/tech_logos/tools/android-studio-logo.png";
import pycharm from "../../../images/tech_logos/tools/pycharm-logo.png";
import postman from "../../../images/tech_logos/tools/postman-logo.png";
import swagger from "../../../images/tech_logos/tools/swagger-logo.svg";
import git from "../../../images/tech_logos/tools/git-logo.png";

// Hardware Programming
import raspberry from "../../../images/tech_logos/hardware/raspberry-pi-logo.png";
import boebot from "../../../images/tech_logos/hardware/boebot-parallax-logo.png"
import ti from "../../../images/tech_logos/hardware/ti-logo.png";

// Databases
import postgres from "../../../images/tech_logos/databases/postgres-logo.png";
import firebase from "../../../images/tech_logos/databases/firebase-logo.png";
import mysql from "../../../images/tech_logos/databases/mysql-logo.png";

// DevOps
import gitlab from "../../../images/tech_logos/devops/gitlab-logo.png";
import terraform from "../../../images/tech_logos/devops/terraform-logo.png";
import docker from "../../../images/tech_logos/devops/docker-logo.png";

class AboutMe extends React.Component {
  prog_lang = {
    title: "Programming Languages",
    logos: [python, java, swift, javascript, go, rust, cpp, c],
  };

  libraries = {
    title: "Libraries/Frameworks",
    logos: [
      // Pytest
      // Alembic
      // Pydantic
      // ReactJS
      // VueJS
      // Openpyxl
      // Kafka?
    ],
  };

  tools = {
    title: "Tools",
    logos: [vscode, xcode, android_studio, pycharm, postman, swagger, git],
  };

  databases = {
    title: "Databases",
    logos: [postgres, firebase, mysql],
  };

  hardware = {
    title: "Hardware Programming",
    logos: [
      raspberry,
      // Boe-Bot
      ti,
    ],
  };

  devops = {
    title: "DevOps",
    logos: [gitlab, docker, terraform],
  };

  card_info = [
    this.prog_lang,
    this.libraries,
    this.tools,
    this.databases,
    this.hardware,
    this.devops,
  ];

  render() {
    // To report page view
    ReactGA.pageview("/AboutMe");

    return (
      <div>
        {/* Title of the Section */}

        <Typography variant="h4" align="center" gutterBottom>
          About Me
        </Typography>
        <div className="flex items-center p-32">
          {/* Picture on the left */}
          <div className="flex-shrink-0">
            <img
              src={engBuilding}
              alt="Image"
              className="size-128 rounded-full object-cover"
            />
          </div>

          {/* Intro paragraph on the right */}
          <div className="ml-12">
            <Typography
              className="bg-slate bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-app-text-color"
              variant="body1"
              paragraph
            >
              A young engineer with a growing passion for creating software and
              learning about new technology. I recently graduated from UCF in
              December of 2020 and I am currently working as a Software Engineer
              at SOLUTE. My most recent personal project is an IOS app called
              "Savings Mapper". You can check it out on the App Store.
            </Typography>

            <Typography
              className="bg-slate bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-app-text-color"
              variant="body1"
              paragraph
            >
              This web app serves as an extension of my resume and also gave me
              the opportunity to learn ReactJS. It features more information
              displayed in a more interactive way. I am now using it to
              personally track my growth as a developer through my projects,
              skills, and work experience.
            </Typography>
          </div>
        </div>

        {/* Grid for the Tech Used */}
        <div className="grid grid-cols-3 gap-10 mx-24">
          {this.card_info.map((card, index) => (
            <div key={card.id}>
              {/* Add Props to TechUsedCard to fill with the icons and probably the info needed for the grids */}
              <TechUsedCard title={card.title} logos={card.logos} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default AboutMe;
