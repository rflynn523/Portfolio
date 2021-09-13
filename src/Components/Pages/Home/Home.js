import React from 'react';
import ReactGA from 'react-ga'

import '../Home/Home.css'
import engBuilding from '../../../images/ENGBuildingWebSize.jpg';

import linkedInIcon from '../../../images/LI-In-Bug.png'
import githubIcon from '../../../images/GitHub-Logo.png'
import mailIcon from '../../../images/envelope.png'
import resumeIcon from '../../../images/resumeIcno.png'

import resumePDF from '../Home/Ryan Flynn Resume.pdf'

// npm run deploy to update live website

// Tracking Pages
//      (/, /Home, /Education. /Skills, /Projects)
// Tracking Events
//      Links Clicked (Home Page Icons - Home.js) 
//      Skills Selected (Card.js)
//      Project Details Viewed (ProjectBox.js)
//      Links Clicked (Project Detail Links - ProjectDetailsCard.js)


// Home page component
// (App -> Home)
class Home extends React.Component
{
    
    render()
    {
        // To report page view
        ReactGA.pageview('/Home')
    
        return(
            <div className="homeGrid">
                <p>
                    <h2>About Me</h2>
                    A young engineer with a growing passion for creating software and learning about new 
                    technology. I recently graduated from UCF in December of 2020 and I am currently working as 
                    a Software Engineer at SOLUTE. This web app serves as an extension of my resume and also gave 
                    me the opportunity to learn ReactJS. It features more information displayed in a more interactive way. 
                    I am now using it to personally track my growth as a developer through my projects, skills, and work experience.

                    <h3>Contact Info</h3>
                    <div className="contactInfoLink">
                            <a href = "mailto:rflynn523@yahoo.com"  target="_blank">
                                <img className="contactInfoLink" src={mailIcon} width ="5px" height="5px" onClick={e=>ReactGA.event({category:"Link Clicked", action:"Email"})}/>
                            </a>
                            <a href = "https://www.linkedin.com/in/ryan-flynn-5b0a56170/"  target="_blank" onClick={e=>ReactGA.event({category:"Link Clicked", action:"LinkedIn"})}>
                                <img className="contactInfoLink" src={linkedInIcon} width ="5px" height="5px"/>
                            </a>
                            <a href = "https://github.com/rflynn523"  target="_blank" onClick={e=>ReactGA.event({category:"Link Clicked", action:"Github Profile"})}>
                                <img className="contactInfoLink" src={githubIcon} />
                            </a>
                            <a href = {resumePDF}  target="_blank">
                                <img className="contactInfoLink" src={resumeIcon} onClick={e=>ReactGA.event({category:"Link Clicked", action:"Resume"})} />
                            </a>
                    </div>
                </p>

                <img src = {engBuilding} />
            </div>
        )
    }
}

export default Home;