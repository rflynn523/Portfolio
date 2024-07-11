import React from "react";
import ReactGA from "react-ga";

import "./AboutMe.css";

import engBuilding from "../../../images/ENGBuildingWebSize.jpg";
import TechUsedCard from "../../Card/TechUsedCard";
import { Grid, Container, Card, CardContent, Typography } from "@mui/material";
import test from "../../../images/appStoreIcon.png";

// Programming Languages
import python from "../../../images/tech_logos/languages/python-logo-only.png";
import java from "../../../images/tech_logos/languages/java-icon.svg";
import swift from "../../../images/tech_logos/languages/Swift Logo/Assets/Swift logo/SVG/Swift_logo_color.svg";
import go from "../../../images/tech_logos/languages/Go-Logo_Aqua.png";
import c from "../../../images/tech_logos/languages/c-logo/icons8-c-programming-480.png";
import cpp from "../../../images/tech_logos/languages/cpp_logo.svg";
import javascript from "../../../images/tech_logos/languages/js.png";
import html from "../../../images/tech_logos/languages/HTML5_Logo_512.png";

// Database Images
import mysql from "../../../images/tech_logos/databases/logo-mysql-170x115.png";
import firebase from "../../../images/tech_logos/databases/firebase-logo-logomark.png";
import postgres from "../../../images/tech_logos/databases/PostgreSQL_logo.3colors.120x120.png";

class AboutMe extends React.Component {
  prog_lang = {
    title: "Programming Languages",
    logos: [
      python,
      java,
      swift,
      go,
      c,
      cpp,
      javascript,
      // JavaScript
      // Golang
      // SQL?
      // HTML / CSS ?
    ],
  };

  libraries = {
    title: "Libraries/Frameworks",
    logos: [
      // Pytest
      // Alembic
      // Pydantic
      // ReactJS
      // VueJS
      // Tkinter?
      // Java Swing
      // OpenCV?
      // Openpyxl
      // Kafka?
    ],
  };

  tools = {
    title: "Tools",
    logos: [
      // VS Code
      // Atom?
      // Pytest
      // Postman
      // Swagger
      // Flake8 / Black / MyPy python linters
    ],
  };

  databases = {
    title: "Databases",
    logos: [mysql, firebase, postgres],
  };

  devops = {
    title: "DevOps",
    logos: [
      // Git
      // Gitlab / GitHub
      // Kubernetes
      // Docker
      // Poetry (Python Manager)?
    ],
  };

  hardware = {
    title: "Hardware Programming",
    logos: [
      // Raspberry Pi
      // Boe-Bot
      // MSP-EXP430 G2 and FR6989
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
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Title of the Section */}
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                About Me
              </Typography>
            </Grid>

            {/* Picture on the left */}
            <Grid item xs={12} md={6}>
              <img
                src={engBuilding}
                alt="Image"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>

            {/* Intro paragraph on the right */}
            <Grid item xs={12} md={6}>
              <Typography
                className="bg-slate bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-black"
                variant="body1"
                paragraph
              >
                A young engineer with a growing passion for creating software
                and learning about new technology. I recently graduated from UCF
                in December of 2020 and I am currently working as a Software
                Engineer at SOLUTE. My most recent personal project is an IOS
                app called "Savings Mapper". You can check it out on the App
                Store.
              </Typography>

              <Typography
                className="bg-slate bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-black"
                variant="body1"
                paragraph
              >
                This web app serves as an extension of my resume and also gave
                me the opportunity to learn ReactJS. It features more
                information displayed in a more interactive way. I am now using
                it to personally track my growth as a developer through my
                projects, skills, and work experience.
              </Typography>
            </Grid>

            {/* Grid for the Tech Used */}
            <div className="grid grid-cols-3 gap-10">
              {this.card_info.map((card, index) => (
                <div key={card.id}>
                  {/* Add Props to TechUsedCard to fill with the icons and probably the info needed for the grids */}
                  <TechUsedCard title={card.title} logos={card.logos} />
                </div>
              ))}
            </div>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default AboutMe;
