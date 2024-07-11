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
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa';
import './Card.css'


import './Card.css';

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

            <div className="bg-slate bg-opacity-10 backdrop-blur-lg p-5 rounded-lg shadow-lg text-app-text-color">
                <div className="flex text-xl font-bold mb-5 border-2 rounded-full justify-center">{this.props.title}</div>
                    <div className="flex flex-wrap gap-4 justify-evenly">
                    {this.props.logos.map((image, imageIndex) => {
                                        return <img
                                            src={image}
                                            alt={`Image ${imageIndex + 1}`}
                                            key={imageIndex}
                                            className='size-16 object-contain"'
                                            />
                                    })}
                </div>
          </div>
        )
    }
}

export default TechUsedCard;