import React from 'react';
import ReactGA from 'react-ga'

import MessageCardContainer from './MessageCardContainer';
import { Grid, Container, Card, CardContent, Typography } from '@mui/material';

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
            <div className='borderBox'>
                <h2>Home Section</h2>
                <MessageCardContainer message="HELLO WORLD MY NAME IS RYAN FLYNN A SOFTWARE ENGINEER. THIS IS MY WEB APP" />

            </div>
        )
    }
}

export default Home;