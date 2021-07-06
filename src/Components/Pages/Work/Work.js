import React from 'react';
import ReactGA from 'react-ga'

import './Work.css';
import ListCard from '../../Card/ListCard';


// Can update all of the Work Experience Information in this Component and it will be passed through props

// (App -> Work)
class Work extends React.Component
{
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
            <ListCard allObjects = {this.allWork} componentType = "Work"/>
        </div>)       
    }
}

export default Work;