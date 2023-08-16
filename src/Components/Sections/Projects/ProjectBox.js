import React from 'react';
import ReactGA from 'react-ga'
// import './Project.css'
import ProjectTitleCard from './ProjectTitleCard';
import ProjectDetailsCard from './ProjectDetailsCard'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Project box component that display each project in the grid/box view and switches to the details view
// (App -> ProjectPage -> ProjectGrid -> ProjectBox)
//                          - project

const styles = {
    card: {
      width: '100%',
      paddingTop: '100%',
      position: 'relative',
    },
    media: {
      height: '80%',
    },
    content: {
      height: '20%',
    },
  };

class ProjectBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.showDetails = this.showDetails.bind(this);

        this.state = {class : "Title", active : <ProjectTitleCard project={this.props.project}/>};
    }

    showDetails()
    {
        if(this.state.class === "Title")
        {
            // Tracking specific events
            ReactGA.event({category: 'Project Details Viewed', action:this.props.project.title})
            this.setState({class : "Details", active : <ProjectDetailsCard project={this.props.project} icons={this.props.icons}/>});
        }
            
        else
            this.setState({class : "Title", active : <ProjectTitleCard project={this.props.project}/>})
    }

    render()
    {
       // Need to add the more details with the on click
        return (

            // onClick={this.showDetails}>
        <div > 
            {this.state.active}
         </div>
                // <Card sx={{ maxWidth: 345 }} className="ProjectTitle">
                //         <CardMedia
                //         component="img"
                //         height="140"
                //         image={this.props.project.image}
                //         alt="green iguana"
                //         className = "projectImg"
                //         />
                //         <CardContent>
                //             <Typography className="title">
                //                 {this.props.project.title}
                //             </Typography>
                        
                //             <Typography className="description">
                //                 {this.props.project.description}
                //             </Typography>
                //         </CardContent>
                // </Card>
        )
    }
}

export default ProjectBox