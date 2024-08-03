import React from "react";

class JobSummary extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Job Title */}
        <div className="text-left md:text-left">
          <div className="truncate">{this.props.job_info.title}</div>
        </div>

        {/* Company Name */}
        <div className="text-center">
          <div className="truncate">{this.props.job_info.company}</div>
        </div>

        {/* Dates */}
        <div className="text-right md:text-right">
          <div>{this.props.job_info.date}</div>
        </div>
      </div>
    );
  }
}

export default JobSummary;
