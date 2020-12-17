import React from 'react';
import ProjectGrid from './ProjectGrid';
import ProjectList from './ProjectList';
import petConnect from '../../../images/Overall.JPG'
import budgetGUI from '../../../images/New_Month.JPG'
import resumeWebApp from '../../../images/ResumeWebApp.JPG'
import groupBuyImage from '../../../images/CheckDiscountsPage.jpg'
import SQLWebAppImage from '../../../images/Stretched.JPG'
import waldoImage from '../../../images/puzzle_1.jpg'
import escapeRoomImage from '../../../images/EscapeRoom.JPG'
import ledDisplay from '../../../images/LEDDisplay.JPG'

class ProjectPage extends React.Component
{
    PetConnect = 
    {
        title : "Pet Connect",
        date : "May 2020 - December 2020",
        image : petConnect,
        description : "A smart home system that allows people to let their pet outside when they are not home.",
        technology : ["Raspberry Pi controls senors, door motor, speaker, and camera",
                    "MSP430 Microcontroller controllers the home display",
                    "An Android app allows the user to change the mode, open or close the door, and interact with their pet",
                    "Google Firebase keeps track of the user's data and keeps each component up to date."],
        links : "Demo video and github?"
    }

    BudgetGUI = 
    {
        title : "Budget GUI",
        date : "April 2020 - July 2020",
        image : budgetGUI,
        description : "A Desktop GUI Application that assists with a personal budget MicroSoft Excel Spreadsheet.",
        technology : ["Developed in PyCharm using Python", "The Tkinter library is used to make the GUI",
                      "Openpyxl is used to interact with the excel spreadsheet"],
        links : "Github"
    }

    ResumeWebApp = 
    {
        title : "Resume Web App",
        date : "August 2020 - December 2020",
        image : resumeWebApp,
        description : "A website that diaplays my resume information better while also giving more in depth details. Also acts as a way to document the work I have done",
        technology : ["ReactJS used to create the web pages and components", "CSS handles the styling of the web app."],
        links : "Github, this link"
    }

    MultiFuncLED =
    {
        title : "Multi Function LED Display",
        date : "May 2019 - August 2019",
        image : ledDisplay,
        description : "Two seven segment diaplays that will ouptut different modes for the user",
        technology : ["MSP430... controls the two seven segment LEDs with jumper wires and a bread board",
                      "C code developed in Code Composer Studio"],

        links : "Github and my demo video"
    }

    EscapeRoom = 
    {
        title : "Escape Room",
        date : "August 2019 - Novembere 2019",
        image : escapeRoomImage,
        description : "A different take on an escape room game that consists of puzzles that you must solve to move onto the next level.",
        technology : ["Created for a group project for Process of Object Oriented Programming",
                      "Made with Java in Android Studio"],

        links : "Github? and more pictures?"
    }

    GroupBuy = 
    {
        title : "Group Buy",
        date : "March 2020 - May 2020",
        image : groupBuyImage,
        description : "Group project that developed a web application similar to Groupon that sells items and gives out discount codes.",
        technology : ["HTML and CSS was used to create the web pages",
                      "The APIs consist of JavaScript and PHP to make queries from the database with SQL",
                      "Database Systems class"],

        links : "Github? and more pictures?"
    }

    SQLGUI =
    {
        title : "SQL GUI / Web App",
        date : "Janurary 2020 - April 2020",
        image : SQLWebAppImage,
        description : "SQL GUI and Java Servlet App that make SQL querries and disaplays the results.",
        technology : ["Java Programming Language",
                      "Java Servlet Pages",
                      "MySQL Workbench",
                      "Enterprise Computing class"],

        links : "Github?"
    }

    WheresWaldo = 
    {
        title : "Where's Waldo",
        date : "August 2019 - October 2019",
        image : waldoImage,
        description : "A Template Matching assignment that solves a 'Where's Waldo' puzzle.",
        technology : ["Created in a Robotic Systems course", "Developed in Python with Google Colab",
                      "OpenCV library"],

        links : "Github"
    }


    all_Projects = [this.PetConnect, this.BudgetGUI, this.ResumeWebApp, this.MultiFuncLED, 
                    this.EscapeRoom, this.GroupBuy, this.SQLGUI, this.WheresWaldo]

    render()
    {
        // Add the buttons to switch the views 
        // Possibly only need to change the class name to switch the layout from grid to list??
        return (<div>
                View Option Goes Here
                <ProjectGrid allProjects = {this.all_Projects}/>
                    
            </div>)
    }
}

export default ProjectPage;