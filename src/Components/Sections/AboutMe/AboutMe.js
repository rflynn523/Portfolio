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
import react from "../../../images/tech_logos/libraries/react-logo.png";
import pytest from "../../../images/tech_logos/libraries/pytest-logo.png";
import pydantic from "../../../images/tech_logos/libraries/pydantic-logo.svg";
import kafka from "../../../images/tech_logos/libraries/kafka-logo.png";
import tailwinds from "../../../images/tech_logos/libraries/tailwind-logo.png";
import swiftui from "../../../images/tech_logos/libraries/swiftui-logo.png";

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
import boebot from "../../../images/tech_logos/hardware/boebot-parallax-logo.png";
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
    logos: [
      {
        image: python,
        tooltip: "Python",
      },
      {
        image: java,
        tooltip: "Java",
      },
      {
        image: swift,
        tooltip: "Swift",
      },
      {
        image: javascript,
        tooltip: "JavaScript",
      },
      {
        image: go,
        tooltip: "Golang",
      },
      {
        image: rust,
        tooltip: "Rust",
      },
      {
        image: cpp,
        tooltip: "C++",
      },
      {
        image: c,
        tooltip: "C",
      },
    ],
  };

  libraries = {
    title: "Libraries/Frameworks",
    logos: [
      {
        image: react,
        tooltip: "ReactJS",
      },
      {
        image: pytest,
        tooltip: "PyTest",
      },
      {
        image: pydantic,
        tooltip: "Pydantic",
      },
      {
        image: swiftui,
        tooltip: "SwiftUI",
      },
      {
        image: tailwinds,
        tooltip: "Tailwinds",
      },
      {
        image: kafka,
        tooltip: "Kafka",
      },
    ],
  };

  tools = {
    title: "Tools",
    logos: [
      {
        image: vscode,
        tooltip: "Visual Studio Code",
      },
      {
        image: xcode,
        tooltip: "Xcode",
      },
      {
        image: android_studio,
        tooltip: "Android Studio",
      },
      {
        image: pycharm,
        tooltip: "PyCharm",
      },
      {
        image: postman,
        tooltip: "Postman",
      },
      {
        image: swagger,
        tooltip: "Swagger",
      },
      {
        image: git,
        tooltip: "Git",
      },
    ],
  };

  databases = {
    title: "Databases",
    logos: [
      {
        image: postgres,
        tooltip: "PostgreSQL",
      },
      {
        image: firebase,
        tooltip: "Firebase",
      },
      {
        image: mysql,
        tooltip: "MySQL",
      },
    ],
  };

  hardware = {
    title: "Hardware Programming",
    logos: [
      {
        image: raspberry,
        tooltip: "Raspberry Pi",
      },
      {
        image: boebot,
        tooltip: "BoeBot",
      },
      {
        image: ti,
        tooltip: "MSP430 Microcontrollers",
      },
    ],
  };

  devops = {
    title: "DevOps",
    logos: [
      {
        image: gitlab,
        tooltip: "GitLab CICD",
      },
      {
        image: docker,
        tooltip: "Docker",
      },
      {
        image: terraform,
        tooltip: "Terraform",
      },
    ],
  };

  card_info = [
    this.prog_lang,
    this.libraries,
    this.tools,
    this.databases,
    this.devops,
    this.hardware,
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
              <TechUsedCard title={card.title} logos={card.logos} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default AboutMe;
