import React from 'react';
import ReactGA from 'react-ga'

import { Divider, IconButton, Box, Grid, Container, Card, CardContent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const card = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',

        // Needed for the spacing of each "Job Card"
        marginBottom: '20px',
        marginRight: '50px',
        marginLeft: '50px',

    };

const title = {
    };

const companyName = {
      flexGrow: 1,
    };

const dateRange = {
    };


class Job extends React.Component
{
    
    render()
    {
        return (
            <Card style={card}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        
                        {/* Job Title */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography variant="h6">
                                {this.props.job_info.title}
                            </Typography>
                        </Grid>
                        
                        {/* Company Name */}
                        <Grid item xs={12} sm={6} md={3} >
                            <Typography variant="subtitle1" >
                                {this.props.job_info.company}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={1} >
                            <Divider orientation="vertical" />
                        </Grid>
                        
                        {/* Dates */}
                        <Grid item xs={12} sm={6} md={3} >
                            <Typography variant="subtitle1" >
                                {this.props.job_info.date}
                            </Typography>
                        </Grid>

                        {/* Button */}
                        <Grid item xs={12} sm={6} md={1} >
                            <Typography variant="subtitle1" >
                                {"+"}
                            </Typography>
                            {/* <IconButton>
                                <AddIcon />
                            </IconButton> */}
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
            );
        };   
    }

export default Job;