import React from "react";
import "./ProjectGrid.css";
import "./Project.css";

import {
  Chip,
  Box,
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

class ExpandedProject extends React.Component {
  image_container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  image_style = {
    height: "20rem",
    width: "25rem",
    objectFit: "fill",
    padding: "5px",
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Call the switchToUnSelectedGrid() function to hide the project's expanded component
    this.props.onClick();
  }

  render() {
    return (
      <Container maxWidth="lg" onClick={this.handleClick}>
        <Grid container className="ExpandedProject" spacing={2}>
          {/* Left Picture Section */}
          <Grid item xs={12} style={this.image_container}>
            {/* Multiple can be displayed with arrow clicks */}
            <img
              src={this.props.project.image}
              alt="Image"
              style={this.image_style}
            />
          </Grid>

          {/* Right Text section */}
          <Grid item xs={12}>
            {/* Title */}
            <h3>{this.props.project.title}</h3>

            {/* Date */}
            <h4>{this.props.project.date}</h4>

            {/* Language Chips */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {this.props.project.technology.map((tech) => (
                <Chip label={tech} />
              ))}
            </div>

            {/* List of Details */}
            <List sx={{ listStyleType: "disc" }}>
              {this.props.project.technology.map((bullet) => (
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon color="black" fontSize="small" />
                  </ListItemIcon>

                  <ListItemText primary={bullet} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default ExpandedProject;
