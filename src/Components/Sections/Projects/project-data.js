// Project Pictures
import budgetAssistant from "../../../images/BudgetAssistant Screenshot.png";
import savingsMapper from "../../../images/savings_mapper_1200x628.png";
import petConnect from "../../../images/Overall.JPG";
import budgetGUI from "../../../images/New_Month.JPG";
import resumeWebApp from "../../../images/ResumeWebApp.JPG";
import groupBuyImage from "../../../images/CheckDiscountsPage.JPG";
import SQLWebAppImage from "../../../images/Stretched.JPG";
import waldoImage from "../../../images/puzzle_1.jpg";
import escapeRoomImage from "../../../images/EscapeRoom.JPG";
import ledDisplay from "../../../images/LEDDisplay.JPG";

const project_data = {
  BudgetAssistant: {
    title: "Budget Assistant",
    date: "January 2023 - March 2023",
    image: budgetAssistant,
    description:
      "A Python script that interacts with Excel spreadsheets to help reset my monthly budget. " +
      "It runs checks to ensure everything is setup correctly, imports in data entries from a text file, " +
      "sends a summary of the month to my phone, and prints progress to the terminal",
    technology: ["Python", "Pytest", "Openpyxl"],
    links: {
      "https://github.com/rflynn523/Budget-Assistant": "GitHub",
    },
  },

  SavingsMapper: {
    title: "Savings Mapper",
    date: "November 2021 - February 2022",
    image: savingsMapper,
    description:
      "An IOS app that gives people a flexible way to calculate " +
      "how much they allocate to each of their savings goals every month. " +
      "The user enters in an amount of money and then uses sliders to dictate how much money to apply to each saving category.",
    technology: ["Swift", "SwiftUI", "XCode"],
    links: {
      "https://github.com/rflynn523/Money-Mapper": "GitHub",
      "https://apps.apple.com/us/app/savings-mapper/id1611083071?itsct=apps_box_link&itscg=30200":
        "AppStore",
    },
  },

  PetConnect: {
    title: "Pet Connect",
    date: "May 2020 - December 2020",
    image: petConnect,
    description:
      "A smart home system that allows people to let their pet outside when they are not home. Raspberry Pi controls senors, door motor, speaker, and camera. MSP430 Microcontroller controls the home display" +
      "An Android app allows the user to change the mode, open or close the door, and interact with their pet. Firebase keeps track of the user's data and keeps each component up to date.",
    technology: [
      "Raspberry Pi",
      "MSP430 Microcontroller",
      "Android",
      "Firebase",
      "Python",
      "Java",
    ],
    links: {
      "https://www.youtube.com/watch?v=4sF6NkZ8nSA&t=3s": "Youtube", // Presentation
      "https://www.youtube.com/watch?v=950Lf8dNDNU&t=2s": "Youtube", // Demo
    },
  },

  BudgetGUI: {
    title: "Budget GUI",
    date: "April 2020 - July 2020",
    image: budgetGUI,
    description:
      "A Desktop GUI Application that assists with a personal budget MicroSoft Excel Spreadsheet.",
    technology: ["Python", "PyCharm", "Tkinter", "Openpyxl"],
    links: { "https://github.com/rflynn523/BudgetGUI": "GitHub" },
  },

  ResumeWebApp: {
    title: "Resume Web App",
    date: "August 2020 - Feburary 2020",
    image: resumeWebApp,
    description:
      "A website that displays my resume information in a more interactive way while also giving more in depth details. Also acts as a way to document the work I have done",
    technology: ["ReactJS", "JavaScript", "Tailwindcss"],
    links: {},
  },

  MultiFuncLED: {
    title: "Multi Function LED Display",
    date: "May 2019 - August 2019",
    image: ledDisplay,
    description:
      "Two seven segment diaplays that will ouptut different modes for the user. MSP4302553 controls the two seven segment LEDs with jumper wires and a bread board",
    technology: ["MSP4302553 Microcontroller", "C", "Code Composer Studio"],

    links: {
      "https://github.com/rflynn523/Multi-Function-LED-Display": "GitHub",
      "https://www.youtube.com/watch?v=Ino6i9vFSoI&feature=youtu.be": "Youtube",
    },
  },

  EscapeRoom: {
    title: "Escape Room",
    date: "August 2019 - November 2019",
    image: escapeRoomImage,
    description:
      "A different take on an escape room game that consists of puzzles that you must solve to move onto the next level. Created for a group project for Process of Object Oriented Programming course",
    technology: ["Java", "Android Studio"],

    links: {},
  },

  GroupBuy: {
    title: "Group Buy",
    date: "March 2020 - May 2020",
    image: groupBuyImage,
    description:
      "Group project that developed a web application similar to Groupon that sells items and gives out discount codes. The APIs consist of JavaScript and PHP to make queries from the database with SQL.Created for a Database Systems class",
    technology: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],

    links: {},
  },

  SQLGUI: {
    title: "SQL GUI / Web App",
    date: "Janurary 2020 - April 2020",
    image: SQLWebAppImage,
    description:
      "SQL GUI and Java Servlet App that make SQL querries and disaplays the results. Developed for Enterprise Computing class",
    technology: ["Java", "Java Servlet Pages", "MySQL Workbench"],

    links: {
      "https://github.com/rflynn523/Java-Reference-Programs/tree/master/Assignment4/SqlGUI":
        "GitHub",
    },
  },

  WheresWaldo: {
    title: "Where's Waldo",
    date: "August 2019 - October 2019",
    image: waldoImage,
    description:
      "A Template Matching assignment that solves a 'Where's Waldo' puzzle. Created in a Robotic Systems course",
    technology: ["Python", "Google Colab", "OpenCV"],

    links: {
      "https://github.com/rflynn523/Python-Reference-Programs/tree/master/Template%20Matching":
        "GitHub",
    },
  },
};

export default project_data;
