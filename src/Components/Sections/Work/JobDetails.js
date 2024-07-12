import React from "react";
import ReactGA from "react-ga";

import {
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

class JobDetails extends React.Component {
  render() {
    return (
      <Grid container spacing={2} alignItems="center">
        {/* Bullet Points */}
        <Grid item xs={12} md={12}>
          <List sx={{ listStyleType: "disc" }}>
            {this.props.job_info.bullet_points.map((bullet) => (
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon color="black" />
                </ListItemIcon>

                <ListItemText primary={bullet} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Chips with the tech used */}
        <Grid item xs={12}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {this.props.job_info.technology.map((tech) => (
              <Chip label={tech} />
            ))}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default JobDetails;
