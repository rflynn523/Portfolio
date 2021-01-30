import React from 'react';
import Button from '../../Button/Button'
import '../Home/Home.css'

import trees from '../../../images/BackTreesWebSize.jpg';
import engBuilding from '../../../images/ENGBuildingWebSize.jpg';
import cap from '../../../images/CapThrowWebSize.jpg';



class Home extends React.Component
{
    render()
    {
        return(
            <div className="homeGrid">
                <p>
                    A young engineer with a growing passion for software development, embedded systems, and compute science.
                    I recently graduated from the University of Central Florida and started working working as a Computer 
                    Programming Intern at Cuhaci & Peterson.
                </p>

                {/* <img src = {trees} /> */}

                <img src = {engBuilding} />
                {/* <img src = {cap} /> */}


            </div>
        )
    }
}

export default Home;