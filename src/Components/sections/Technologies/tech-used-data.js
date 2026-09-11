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
import swiftui from "../../../images/tech_logos/libraries/swiftui-logo.png";
import tailwinds from "../../../images/tech_logos/libraries/tailwind-logo.png";
import kafka from "../../../images/tech_logos/libraries/kafka-logo.png";

// Developer Tools
import git from "../../../images/tech_logos/tools/git-logo.png";
import postman from "../../../images/tech_logos/tools/postman-logo.png";
import swagger from "../../../images/tech_logos/tools/swagger-logo.svg";
import jira from "../../../images/tech_logos/tools/jira-logo.png";
import claudecode from "../../../images/tech_logos/tools/Claude Spark - Clay.png";

// Databases
import postgres from "../../../images/tech_logos/databases/postgres-logo.png";
import firebase from "../../../images/tech_logos/databases/firebase-logo.png";
import mysql from "../../../images/tech_logos/databases/mysql-logo.png";
import oracle from "../../../images/tech_logos/databases/sql-developer-logo.png";

// DevOps
import docker from "../../../images/tech_logos/devops/docker-logo.png";
import gitlab from "../../../images/tech_logos/devops/gitlab-logo.png";
import argocd from "../../../images/tech_logos/devops/argo-cd-logo.png";

// Cloud / Infrastructure
import terraform from "../../../images/tech_logos/devops/terraform-logo.png";
import helm from "../../../images/tech_logos/helm-icon-black.png";

// Observability
import splunk from "../../../images/tech_logos/tools/splunk-logo.png";
import datadog from "../../../images/tech_logos/tools/dd_icon_white.png";
import coralogix from "../../../images/tech_logos/RGB, Logo Mark, Favicon.svg";

// IDEs
import vscode from "../../../images/tech_logos/tools/vscode-logo.png";
import xcode from "../../../images/tech_logos/tools/xcode-logo.svg";
import android_studio from "../../../images/tech_logos/tools/android-studio-logo.png";
// import pycharm from "../../../images/tech_logos/tools/pycharm-logo.png";

// Hardware Programming
import raspberry from "../../../images/tech_logos/hardware/raspberry-pi-logo.png";
import boebot from "../../../images/tech_logos/hardware/boebot-parallax-logo.png";
import ti from "../../../images/tech_logos/hardware/ti-logo.png";

const tech_used_data = {
  prog_lang: {
    title: "Programming Languages",
    logos: [
      { image: python, tooltip: "Python" },
      { image: java, tooltip: "Java" },
      { image: swift, tooltip: "Swift" },
      { image: javascript, tooltip: "JavaScript" },
      { image: go, tooltip: "Golang" },
      { image: rust, tooltip: "Rust" },
      { image: cpp, tooltip: "C++" },
      { image: c, tooltip: "C" },
    ],
  },
  libraries: {
    title: "Libraries/Frameworks",
    logos: [
      { image: react, tooltip: "ReactJS" },
      { image: pytest, tooltip: "PyTest" },
      { image: pydantic, tooltip: "Pydantic" },
      { image: swiftui, tooltip: "SwiftUI" },
      { image: tailwinds, tooltip: "Tailwinds" },
      { image: kafka, tooltip: "Kafka" },
    ],
  },
  developer_tools: {
    title: "Developer Tools",
    logos: [
      { image: git, tooltip: "Git" },
      { image: postman, tooltip: "Postman" },
      { image: swagger, tooltip: "Swagger" },
      { image: jira, tooltip: "Jira" },
      { image: claudecode, tooltip: "Claude Code" },
    ],
  },
  databases: {
    title: "Databases",
    logos: [
      { image: postgres, tooltip: "PostgreSQL" },
      { image: firebase, tooltip: "Firebase" },
      { image: mysql, tooltip: "MySQL" },
      { image: oracle, tooltip: "Oracle SQL Developer" },
    ],
  },
  devops: {
    title: "DevOps",
    logos: [
      { image: docker, tooltip: "Docker" },
      { image: gitlab, tooltip: "GitLab CICD" },
      { image: argocd, tooltip: "Argo CD" },
    ],
  },

  infrastructure: {
    title: "Infrastructure",
    logos: [
      { image: terraform, tooltip: "Terraform" },
      // { image: aws, tooltip: "AWS" },
      { image: helm, tooltip: "Helm" },
    ],
  },
  observability: {
    title: "Observability",
    logos: [
      { image: splunk, tooltip: "Splunk" },
      { image: datadog, tooltip: "DataDog" },
      { image: coralogix, tooltip: "Coralogix" },
    ],
  },
  ides: {
    title: "IDEs",
    logos: [
      { image: vscode, tooltip: "Visual Studio Code" },
      { image: xcode, tooltip: "Xcode" },
      { image: android_studio, tooltip: "Android Studio" },
      // { image: pycharm, tooltip: "PyCharm" },
    ],
  },
  hardware: {
    title: "Hardware Programming",
    logos: [
      { image: raspberry, tooltip: "Raspberry Pi" },
      { image: boebot, tooltip: "BoeBot" },
      { image: ti, tooltip: "MSP430 Microcontrollers" },
    ],
  },
};

export default tech_used_data;
