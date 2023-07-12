import React from 'react';
import ReactGA from 'react-ga'

import './AboutMe.css'

import engBuilding from '../../../images/ENGBuildingWebSize.jpg';
import TechUsedCard from '../../Card/TechUsedCard';
import { Grid, Container, Card, CardContent, Typography } from '@mui/material';
import test from '../../../images/appStoreIcon.png'


class AboutMe extends React.Component
{
    test_list = [test, test, test, test, test]
    test2 = [test]

    all_lists = [this.test_list, this.test2, this.test_list, this.test2, this.test_list, this.test2]
    render()
    {
        // To report page view
        ReactGA.pageview('/AboutMe')

        return(
            <div className="borderBox">

                <Container maxWidth="lg">
                    <Grid container spacing={2}>

                        {/* Title of the Section */}
                        <Grid item xs={12}>
                            <Typography variant="h4" align="center" gutterBottom>
                                About Me
                            </Typography>
                        </Grid>
                        
                        {/* Picture on the left */}
                        <Grid item xs={12} md={6}>
                            <img
                                src={engBuilding}
                                alt="Image"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Grid>
                        
                        {/* Intro paragraph on the right */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" paragraph>
                                A young engineer with a growing passion for creating software and learning about new 
                                technology. I recently graduated from UCF in December of 2020 and I am currently working as 
                                a Software Engineer at SOLUTE. My most recent personal project is an IOS app called "Savings Mapper". 
                                You can check it out on the App Store. 
                            </Typography>

                            <Typography variant="body1" paragraph>
                                This web app serves as an extension of my resume and also gave 
                                me the opportunity to learn ReactJS. It features more information displayed in a more interactive way. 
                                I am now using it to personally track my growth as a developer through my projects, skills, and work experience.
                            </Typography>
                        </Grid>

                        {/* Container for the Tech Used */}
                        <Container maxWidth="lg">
                            <Grid container spacing={2}>
                                {this.all_lists.map((list_of_logos, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    
                                    {/* Add Props to TechUsedCard to fill with the icons and probably the info needed for the grids */}
                                    <TechUsedCard images = {list_of_logos}/>
                                </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Grid>
                </Container>
            </div>
        )
    }
}
export default AboutMe;