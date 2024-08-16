import React from "react";
import JobSummary from "./JobSummary";
import JobDetails from "./JobDetails";
import work_experience_data from "./work-data";
import Title from "../../Title";

class Experiences extends React.Component {
  allWork = [work_experience_data.solute, work_experience_data.CP];

  render() {
    return (
      <div className="pt-20 xl:pt-24 p-4 md:p-16 lg:p-32 container md:mx-auto space-y-8">
        <Title text="Experiences" />

        {this.allWork.map((job, index) => (
          <div
            className="w-full bg-slate bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden"
            key={index}
          >
            {/* Summary */}
            <div
              className="px-4 py-2 rounded-lg cursor-pointer" //border border-with-green"
              //  hover:border-with-green transition-all duration-300"
              // onClick={() => {
              //   const content = document.getElementById(
              //     `panel-${index}-content`
              //   );
              //   content.classList.toggle("hidden");
              // }}
            >
              <JobSummary job_info={job} />
            </div>

            {/* Details */}
            <div id={`panel-${index}-content`} className="px-4 py-2">
              <JobDetails job_info={job} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Experiences;
