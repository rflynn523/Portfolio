import React from 'react';
import ReactGA from 'react-ga'

import './Education.css';
import Card from '../../Card/Card'
import logo from '../../../images/ucf_logo_horiz.png'

// Education component with the hardcoded info for now
// (App -> Education)
class Education extends React.Component
{
    // Impliment Firebase LATER so these are not hardcoded??
    EE = 
    {
        title : "EE",
        items : {
            "Electronics 1" : "",
            "Linear Circuits 2" : "",
            "Networks and Systems" : "",
            "Computer Communication Networks" : "",
            "Electrical Networks" : ""
        }
    }

    CpE = 
    {
        title : "CpE",
        items : 
        {
            "Robotic Systems" : "",
            "Computer Architecture" : "",
            "Embedded Systems" : "",
            "Computer Organization" : "",
            "Digital Systems" : ""
        }
    }

    CS = 
    {
        title : "CS",
        items : 
        {
            "Operating Systems" : "",
            "Discrete Structures 2" : "",
            "Database Systems" : "",
            "Enterprise Computing" : "", 
            "Programming Languages" : "", 
            "Process of Object Oriented Programming" : "", 
            "Object Oreinted Programming" : "",
            "Computer Science 1 & 2" : ""
        }
    }

    render()
    {
        ReactGA.pageview('/Projects')

        return(
            <div className='grid-education'>               
                <div className="education_title">Education</div>
                
                <div className="grid-college">
                    <img src={logo} width='300px'/>
                    <div className="degree">Univesity of Central Florida B.S. Computer Engineering<br></br>
                    Minor in Psychology</div>
                </div>
                
                <div className="education_title">Courses</div>

                <div className='grid-courses'>
                    <Card object={this.EE}/>
                    <Card object={this.CpE}/>
                    <Card object={this.CS} />
                </div>

            </div>
        )
    }
}

export default Education;