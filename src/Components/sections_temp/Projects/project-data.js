// Project Pictures
import budgetAssistant from "../../../images/project_pics/budget_assistant/terminal.png";
import savingsMapper from "../../../images/project_pics/savings_mapper/app_store_ad.png";
import petConnect from "../../../images/project_pics/pet_connect/frame.JPG";
import budgetGUI from "../../../images/project_pics/budget_gui/gui.JPG";
import portfolio from "../../../images/project_pics/portfolio/new_home_page.png";
import groupBuyImage from "../../../images/project_pics/group_buy/check_discounts_page.JPG";
import SQLWebAppImage from "../../../images/project_pics/sql_web_app/main_page.JPG";
import waldoImage from "../../../images/project_pics/wheres_waldo/puzzle.jpg";
import escapeRoomImage from "../../../images/project_pics/escape_room/app.JPG";
import ledDisplay from "../../../images/project_pics/led_display/led.JPG";

const project_data = {
  BudgetAssistant: {
    title: "Budget Assistant",
    date: "January 2023 - March 2023",
    image: budgetAssistant,
    description:
      "A Python script designed to manage and reset my monthly budget by interacting with Excel spreadsheets. " +
      "The script performs validation checks to ensure proper setup, imports data from text files, sends monthly " +
      "summaries to my phone, and outputs progress updates to the terminal.",
    technology: ["Python", "Pytest", "Openpyxl"],
    links: [
      { url: "https://github.com/rflynn523/Budget-Assistant", tooltip: "Code" },
    ],
  },

  SavingsMapper: {
    title: "Savings Mapper",
    date: "November 2021 - February 2022",
    image: savingsMapper,
    description:
      "An iOS app that provides a flexible way for users to allocate their monthly savings across various goals. " +
      "Users input a total amount and use interactive sliders to distribute funds among different savings categories. " +
      "I use this app personally to manage my own savings.",
    technology: ["Swift", "SwiftUI", "XCode", "iOS"],
    links: [
      { url: "https://github.com/rflynn523/Money-Mapper", tooltip: "Code" },
      {
        url: "https://apps.apple.com/us/app/savings-mapper/id1611083071?itsct=apps_box_link&itscg=30200",
        tooltip: "App Store",
      },
    ],
  },

  PetConnect: {
    title: "Pet Connect",
    date: "May 2020 - December 2020",
    image: petConnect,
    description:
      "For my Senior Design project, my team developed a smart home system that allows users to let their pets outside " +
      "while they are away. The system integrates sensors, a door motor, a speaker, and a camera, " +
      "all controlled via a central unit. An Android app enables users to adjust settings, operate the door, " +
      "and interact with their pets. Cloud-based services ensure that all components are synchronized and up-to-date.",
    technology: [
      "Python",
      "Java",
      "Firebase",
      "Raspberry Pi",
      "MSP430 Microcontroller",
      "Android",
    ],
    links: [
      {
        url: "https://www.youtube.com/watch?v=4sF6NkZ8nSA&t=3s",
        tooltip: "Demo",
      },
      {
        url: "https://www.youtube.com/watch?v=950Lf8dNDNU&t=2s",
        tooltip: "Presentation",
      },
    ],
  },

  BudgetGUI: {
    title: "Budget GUI",
    date: "April 2020 - July 2020",
    image: budgetGUI,
    description:
      "A desktop application with a graphical user interface that helps manage a personal budget using a Microsoft Excel spreadsheet.",
    technology: ["Python", "Tkinter", "Openpyxl", "PyCharm"],
    links: [{ url: "https://github.com/rflynn523/BudgetGUI", tooltip: "Code" }],
  },

  Portfolio: {
    title: "Portfolio",
    date: "August 2020 - Feburary 2020",
    image: portfolio,
    description:
      "A dynamic web app where I display my resume interactively and provide in-depth details about my work. " +
      "I use it as a way to document and showcase the projects and experiences I've had.",
    technology: ["JavaScript", "ReactJS", "Tailwindcss"],
    links: [{ url: "https://github.com/rflynn523/Portfolio", tooltip: "Code" }],
  },

  MultiFuncLED: {
    title: "Multi Function LED Display",
    date: "May 2019 - August 2019",
    image: ledDisplay,
    description:
      "A project featuring two seven-segment displays that indicate various modes for the user. " +
      "The MSP4302553 microcontroller controls these displays through jumper wires and a breadboard.",
    technology: ["C", "MSP4302553 Microcontroller", "Code Composer Studio"],

    links: [
      {
        url: "https://github.com/rflynn523/Multi-Function-LED-Display",
        tooltip: "Code",
      },
      {
        url: "https://www.youtube.com/watch?v=Ino6i9vFSoI&feature=youtu.be",
        tooltip: "Demo",
      },
    ],
  },

  EscapeRoom: {
    title: "Escape Room",
    date: "August 2019 - November 2019",
    image: escapeRoomImage,
    description:
      "An escape room game designed as an Android app, where players solve puzzles to advance through levels. " +
      "This project was created as part of a group assignment for a Process of Object-Oriented Programming course.",
    technology: ["Java", "Android Studio"],

    links: [],
  },

  GroupBuy: {
    title: "Group Buy",
    date: "March 2020 - May 2020",
    image: groupBuyImage,
    description:
      "A group project that developed a web application similar to Groupon, featuring item sales and discount codes. " +
      "The application uses JavaScript and PHP for API interactions and SQL for database queries. " +
      "This project was completed for a Database Systems class.",
    technology: ["JavaScript", "PHP", "SQL", "HTML", "CSS"],

    links: [],
  },

  SQLGUI: {
    title: "SQL GUI / Web App",
    date: "Janurary 2020 - April 2020",
    image: SQLWebAppImage,
    description:
      "A SQL GUI and Java Servlet application that performs SQL queries and displays the results. " +
      "Developed as part of an Enterprise Computing class.",
    technology: ["Java", "MySQL Workbench"],

    links: [
      {
        url: "https://github.com/rflynn523/Java-Reference-Programs/tree/master/Assignment4/SqlGUI",
        tooltip: "Code",
      },
    ],
  },

  WheresWaldo: {
    title: "Where's Waldo",
    date: "August 2019 - October 2019",
    image: waldoImage,
    description:
      "A template matching project designed to solve a 'Where's Waldo' puzzle. " +
      "Developed using Python and OpenCV, and executed in Google Colab. " +
      "This assignment was completed for a Robotic Systems course.",
    technology: ["Python", "OpenCV", "Google Colab"],

    links: [
      {
        url: "https://github.com/rflynn523/Python-Reference-Programs/tree/master/Template%20Matching",
        tooltip: "Code",
      },
    ],
  },
};

export default project_data;
