import React from "react";
import ReactGA from "react-ga";

import { Divider, Grid, Typography } from "@mui/material";

const card = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",

  // Needed for the spacing of each "Job Accordion"
  marginBottom: "20px",
  marginRight: "50px",
  marginLeft: "50px",
};

class JobSummary extends React.Component {
  render() {
    return (
      <Grid container spacing={2} alignItems="center">
        {/* Job Title */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">{this.props.job_info.title}</Typography>
        </Grid>

        {/* Company Name */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">
            {this.props.job_info.company}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={1}>
          <Divider orientation="vertical" />
        </Grid>

        {/* Dates */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1">
            {this.props.job_info.date}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default JobSummary;
