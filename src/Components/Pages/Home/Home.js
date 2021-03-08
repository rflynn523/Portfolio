import React from 'react';
import '../Home/Home.css'
import engBuilding from '../../../images/ENGBuildingWebSize.jpg';

import linkedInIcon from '../../../images/LI-In-Bug.png'
import githubIcon from '../../../images/GitHub-Logo.png'
import mailIcon from '../../../images/envelope.png'
import resumeIcon from '../../../images/resumeIcno.png'

// Home page component
// (App -> Home)
class Home extends React.Component
{
    render()
    {
        return(
            <div className="homeGrid">
                <p>
                    <h2>About Me</h2>
                    A young engineer with a growing passion for creating software and learning new about new 
                    technology. I recently graduated from UCF in December of 2020 and started working as a 
                    Computer Programmer Intern at Cuhaci & Peterson where I am currently employed. This web app
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
                            <a href = "./Ryan_Flynn_Resume.pdf"  target="_blank">
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