import React from 'react';
import ReactGA from 'react-ga'

import '../Home/Home.css'
import engBuilding from '../../../images/ENGBuildingWebSize.jpg';

import linkedInIcon from '../../../images/LI-In-Bug.png'
import githubIcon from '../../../images/GitHub-Logo.png'
import mailIcon from '../../../images/envelope.png'
import resumeIcon from '../../../images/resumeIcno.png'

import resumePDF from '../Home/Ryan_Flynn_Resume.pdf'

// Home page component
// (App -> Home)
class Home extends React.Component
{
    
    render()
    {
        // To report page view
        ReactGA.pageview('/')
    
        return(
            <div className="homeGrid">
                <p>
                    <h2>About Me</h2>
                    second TEST A young engineer with a growing passion for creating software and learning new about new 
                    technology. I recently graduated from UCF in December of 2020 and started working at  
                    Cuhaci & Peterson where I am currently employed. I started as a Computer Programmer Intern in
                    January and was promoted to Computational Design Programmer starting in April. This web app
                    serves as an extension of my resume and also gave me the opportunity to learn ReactJS. It 
                    features more information on my education along with interactive Projects and Skills pages.

                    <h3>Contact Info</h3>
                    <div className="contactInfoLink">
                            <a href = "mailto:rflynn523@yahoo.com"  target="_blank">
                                <img className="contactInfoLink" src={mailIcon} width ="5px" height="5px"/>
                            </a>
                            <a href = "https://www.linkedin.com/in/ryan-flynn-5b0a56170/"  target="_blank">
                                <img className="contactInfoLink" src={linkedInIcon} width ="5px" height="5px"/>
                            </a>
                            <a href = "https://github.com/rflynn523"  target="_blank">
                                <img className="contactInfoLink" src={githubIcon} />
                            </a>
                            <a href = {resumePDF}  target="_blank">
                                <img className="contactInfoLink" src={resumeIcon} />
                            </a>
                    </div>
                </p>

                <img src = {engBuilding} />
            </div>
        )
    }
}

export default Home;