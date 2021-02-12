import React from 'react';
import '../Home/Home.css'
import engBuilding from '../../../images/ENGBuildingWebSize.jpg';

// Not used but keeping for now
// import cap from '../../../images/CapThrowWebSize.jpg';
// import trees from '../../../images/BackTreesWebSize.jpg';
// import Button from '../../Button/Button'

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
                    technology. I recently graduated from UCF in December of 2020 and start working as a 
                    Computer Program Intern at Cuhaci & Peterson where I am currently employed. This web app
                    serves as an extension of my Resume and also gave me the opportunity to learn ReactJS. It 
                    features more information on my education along with interactive Projects and Skills pages.

                    <h3>Contact Info</h3>
                    <div>This is my contact info</div>
                </p>

                <img src = {engBuilding} />
            </div>
        )
    }
}

export default Home;