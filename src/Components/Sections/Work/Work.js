import React from "react";

import JobSummary from "./JobSummary";
import JobDetails from "./JobDetails";
import work_experience_data from "./work-data";

class Work extends React.Component {
  allWork = [work_experience_data.solute, work_experience_data.CP];

  render() {
    return (
      <div className="work py-8 container mx-auto px-32 space-y-4">
        {this.allWork.map((job, index) => (
          <div
            className="mb-4 w-full bg-slate bg-opacity-10 backdrop-blur-lg rounded-lg"
            key={index}
          >
            {/* Summary */}
            <div
              className="px-4 py-2 rounded-lg cursor-pointer border border-transparent
                     hover:border-with-green transition-all duration-300"
              onClick={() => {
                const content = document.getElementById(
                  `panel-${index}-content`
                );
                content.classList.toggle("hidden");
              }}
            >
              <JobSummary job_info={job} />
            </div>

            {/* Details */}
            <div id={`panel-${index}-content`} className="hidden px-4 py-2">
              <JobDetails job_info={job} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Work;
