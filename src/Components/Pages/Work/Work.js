import React from 'react';
import ReactGA from 'react-ga'

import './Work.css';
import ListCard from '../../Card/ListCard';


// Can update all of the Work Experience Information in this Component and it will be passed through props

// (App -> Work)
class Work extends React.Component
{
    // Project Object
    // PetConnect = 
    // {
    //     title : "Pet Connect",
    //     date : "May 2020 - December 2020",
    //     image : petConnect,
    //     description : "A smart home system that allows people to let their pet outside when they are not home.",
    //     technology : ["Raspberry Pi controls senors, door motor, speaker, and camera",
    //                 "MSP430 Microcontroller controls the home display",
    //                 "An Android app allows the user to change the mode, open or close the door, and interact with their pet",
    //                 "Google Firebase keeps track of the user's data and keeps each component up to date."],
    //     links : {
    //         "Youtube" :  "https://www.youtube.com/watch?v=4sF6NkZ8nSA&t=3s", // Presentation
    //          "Youtube" : "https://www.youtube.com/watch?v=950Lf8dNDNU&t=2s"   // Demo
    //     }
    // }
    
    // Work Object
    CP = 
    {
        title : "Cuhaci & Peterson AEC",
        date : "Jan 2021 - Present",
        // image : CPLogo, ??? CP Logo
        description : "A general overview of my role and whate I do, I want to seeeeeeeee how long the text goes out",
        technology : ["List of accomplishments, List of accomplishments, List of accomplishments"],
        links : {} // Any links that I can share but probably none
    }
    
    
    // Array of all the objects
    allWork = [this.CP, this.CP, this.CP, this.CP]

    render()
    {
        // For Tracking purposes
        ReactGA.pageview('/Work')

        return(<div className="work">
            <ListCard allObjects = {this.allWork}/>
        </div>)       
    }
}

export default Work;