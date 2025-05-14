import React from "react";

class JobSummary extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center poppins-semibold tracking-wide text-lg text-wrap">
        {/* Job Title */}
        <div className="text-center md:text-left">
          {this.props.job_info.title}
        </div>

        {/* Company Name */}
        <div className="text-center">{this.props.job_info.company}</div>

        {/* Dates */}
        <div className="text-center md:text-right">
          {this.props.job_info.date}
        </div>
      </div>
    );
  }
}

export default JobSummary;
