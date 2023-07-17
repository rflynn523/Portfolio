import React from 'react';
import ReactGA from 'react-ga'

import './Work.css';
import JobSummary from './JobSummary';
import JobDetails from './JobDetails';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Container } from '@mui/material';


// Can update all of the Work Experience Information in this Component and it will be passed through props

// (App -> Work)
class Work extends React.Component
{
    // Work Objects
    solute = 
    {
        title : "Software Engineer",
        company : "SOLUTE",
        date : "Aug 2021 - Present",
        description : 
                    "Backend work in Python, included various feature work, creating unit tests, adding data validation with pydantic." +
                    "Also worked in a team to perform merge requests, debug errors before releases, and come up with new ideas for features/improvements." +
                    "When the team needed it, spent time doing DevOps work to get Redmine running in a RKE2 environment." +
                    "Developed a microservice in Golang that parses messages using Kafka in a publish-subscribe architecture." + 
                    "Documented legacy build and configuration systems using Gitlab Wiki. " +
                    "Working on AGILE development schedule with 2-week sprints, managing issues with Gitlab. ",
        technology : ["Python - Postgres - Pydantic - Swagger - GitLab"],
        links : "SOLUTE A Sigma Defense Company" // Any links that I can share but probably none/ Use for the company name
    }

    CP = 
    {
        title : "Computational Design Programmer",
        company : "Cuhaci & Peterson Architects",
        date : "Jan 2021 - Aug 2021",
        description : "Developed automation scripts that create Revit models for teams within the company. " + 
                        "Used Computational Design to incorporate intelligence to make workflows more efficient. " + 
                        "Built team specific software such as a desktop GUI for teams to record locations of site photos.",
        technology : ["360 Photo Mapper - Python - Dynamo"],
        links : "Cuhaci & Peterson Architects" // Any links that I can share but probably none/ Use for the company name
    }

    shipt =
    {
        title : "Shipt Shopper",
        company : "Shipt",
        date : "Feb 2017 - Dec 2020",
        description : "Shopped for and delivered groceries to the customer with in the delivery window. Along the way I would comunicate with the customer about the status of their items.",
        technology : [],
        links : "Shipt"
    }

    nass = 
    {
        title : "Special Projects Assistant",
        company : "NASS",
        date : "Mar 2017 - Sep 2018",
        description : "Performed various tasks that came up, which included employee computer setup and configuration, data entry, and budget organization.",
        technology : [],
        links : "North American Sub Station Services"
    }

    summerCamp = 
    {
        title : "Summer Camp Counselor",
        company : "Hunter's Creek Community Association",
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

        return(
            <div className='borderBox'>
                <h2>Work Section</h2>
                <div className="work">
                    <Container maxWidth="lg">
                        {this.allWork.map((job, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box marginBottom={2} >
                                    <Accordion container spacing={2} alignItems="center">

                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                                            <JobSummary job_info = {job}/>
                                        </AccordionSummary>

                                        <AccordionDetails>
                                            <JobDetails job_info = {job}/>
                                        </AccordionDetails>
                    
                                    </Accordion>
                                </Box>
                            </Grid>
                            ))}
                    </Container>

                </div>
            </div>
        )       
    }
}

export default Work;