<<<<<<< HEAD
import React from 'react';
import './About.css';
import Card from '../../Card/Card'
import logo from '../../../images/ucf_logo_horiz.png'

class About extends React.Component
{
    other_Object = 
    {
        title : "Other",
        items : {
            "Github" : "3 Courses - 3 Projects",
            "Microsoft Office" : ""
        }
    }

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
        return(
            <div className='grid-about'>
                <p>
                    A young engineer with a growing passion for computer engineering, specifically embedded systems, computer
                    science, and software development. Graduating in December of 2020 from UCF I am looking forward to starting
                    my career as a Software Engineer. My passion for programming grows as I learn new technologies and create 
                    more software that can do amazing things.
                </p>
                
                <div className="about_title">Education</div>
                
                <div className="grid-college">
                    <img src={logo} width='300px'/>
                    <div className="degree">Univesity of Central Florida B.S. Computer Engineering<br></br>
                    Minor in Psychology</div>
                </div>
                
                <div className="about_title">Courses</div>

                <div className='grid-courses'>
                    <Card object={this.EE} title="EE"/>
                    <Card className="card" object={this.CpE}/>
                    <Card className="card" object={this.CS} />
                </div>

            </div>
        )
    }
}

=======
import React from 'react';
import './About.css';
import Card from '../../Card/Card'
import logo from '../../../images/ucf_logo_horiz.png'

class About extends React.Component
{
    other_Object = 
    {
        title : "Other",
        items : {
            "Github" : "3 Courses - 3 Projects",
            "Microsoft Office" : ""
        }
    }

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
        return(
            <div className='grid-about'>
                <p>
                    A young engineer with a growing passion for computer engineering, specifically embedded systems, computer
                    science, and software development. Graduating in December of 2020 from UCF I am looking forward to starting
                    my career as a Software Engineer. My passion for programming grows as I learn new technologies and create 
                    more software that can do amazing things.
                </p>
                
                <div className="about_title">Education</div>
                
                <div className="grid-college">
                    <img src={logo} width='300px'/>
                    <div className="degree">Univesity of Central Florida B.S. Computer Engineering<br></br>
                    Minor in Psychology</div>
                </div>
                
                <div className="about_title">Courses</div>

                <div className='grid-courses'>
                    <Card object={this.EE} title="EE"/>
                    <Card className="card" object={this.CpE}/>
                    <Card className="card" object={this.CS} />
                </div>

            </div>
        )
    }
}

>>>>>>> 73704cb934f6d9e8c274d8aae1fa5fd67243a313
export default About;