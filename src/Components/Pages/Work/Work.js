import React from 'react';
import ReactGA from 'react-ga'

import './Work.css';
import ListCard from '../../Card/ListCard';

// Can update all of the Work Experience Information in this Component and it will be passed through props

// (App -> Work)
class Work extends React.Component
{
    // Work Objects
    solute = 
    {
        title : "Software Engineer",
        date : "Aug 2021 - Present",
        description : "",
        technology : [],
        links : "SOLUTE" // Any links that I can share but probably none/ Use for the company name
    }

    CP = 
    {
        title : "Computational Design Programmer",
        date : "Jan 2021 - Aug 2021",
        description : "Developed automation scripts that create Revit models for teams within the company. " + 
                        "Used Computational Design to incorporate intelligence to make workflows more efficient. " + 
                        "Built team specific software such as a desktop GUI for teams to record locations of site photos.",
        technology : ["360 Photo Mapper"],
        links : "Cuhaci & Peterson Architects" // Any links that I can share but probably none/ Use for the company name
    }

    shipt =
    {
        title : "Shipt Shopper",
        date : "Feb 2017 - Dec 2020",
        description : "Shopped for and delivered groceries to the customer with in the delivery window. Along the way I would comunicate with the customer about the status of their items.",
        technology : [],
        links : "Shipt"
    }

    nass = 
    {
        title : "Special Projects Assistant",
        date : "Mar 2017 - Sep 2018",
        description : "Performed various tasks that came up, which included employee computer setup and configuration, data entry, and budget organization.",
        technology : [],
        links : "North American Sub Station Services"
    }

    summerCamp = 
    {
        title : "Summer Camp Counselor",
        date : "Summer 2017 & 2018",
        description : "Worked as a team with the other counselors to provide fun and safe activities for the campers",
        technology : [],
        links : "Hunter's Creek Community Association"
    }
    
    // Array of all the objects
    allWork = [this.solute, this.CP, this.shipt, this.nass, this.summerCamp]

    render()
    {
        // For Tracking purposes
        ReactGA.pageview('/Work')

        return(<div className="work">
            <ListCard allObjects = {this.allWork} componentType = "Work"/>
        </div>)       
    }
}

export default Work;