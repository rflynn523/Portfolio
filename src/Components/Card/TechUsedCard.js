import React from 'react';
import ReactGA from 'react-ga'
import Card from '@material-ui/core/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import test from '../../images/appStoreIcon.png'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {IconButton, makeStyles} from '@mui/material';
import { Favorite, Share, Comment } from '@mui/icons-material';


import './Card.css';

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const imageStyle = {
    objectFit: 'cover',
    // borderRadius: '4px',
    margin: '5px',
    // width: '70px',
    height: '70px', 
  };

class TechUsedCard extends React.Component
{

    constructor(props)
    {
        super(props);

    }

    render()
    {

        return(
            <div>
                <Card style={cardStyle}>
                    <CardHeader title={this.props.title} sx={{ backgroundColor: 'blue', color: 'white' }}/>
                    <CardContent>
                        <div style={imageContainerStyle}>
                            {this.props.logos.map((image, imageIndex) => {
                                return <img
                                    src={image}
                                    alt={`Image ${imageIndex + 1}`}
                                    key={imageIndex}
                                    style={imageStyle}
                                    />
                            })}

                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default TechUsedCard;