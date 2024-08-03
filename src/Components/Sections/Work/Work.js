import React from "react";
import ReactGA from "react-ga";

import "./Work.css";
import JobSummary from "./JobSummary";
import JobDetails from "./JobDetails";
import work_experience_data from "./work-data";

// Work component displaying job experiences with an accordion-style expandable view
class Work extends React.Component {
  // Array of all job objects
  allWork = [work_experience_data.solute, work_experience_data.CP];

  render() {
    // Track page view with Google Analytics
    ReactGA.pageview("/Work");

    return (
      <div className="work py-8  text-app-text-color">
        {/* Container for the work section */}
        <div className="container mx-auto px-32">
          {/* Stack job items vertically */}
          <div className="space-y-4">
            {this.allWork.map((job, index) => (
              <div className="mb-4 w-full" key={index}>
                {/* Card for each job with a shadow and rounded corners */}
                <div className="bg-slate bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden">
                  {/* Header of the card with job summary and toggle button */}
                  <div
                    className="px-4 py-2 flex items-center justify-between cursor-pointer"
                    onClick={() => {
                      const content = document.getElementById(
                        `panel-${index}-content`
                      );
                      content.classList.toggle("hidden");
                    }}
                  >
                    <JobSummary job_info={job} />
                    {/* Button to toggle the accordion content */}
                    <button
                      className="focus:outline-none"
                      aria-controls={`panel-${index}-content`}
                      aria-expanded="false"
                      id={`panel-${index}-header`}
                    >
                      {/* SVG icon for expand/collapse */}
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Content of the accordion, initially hidden */}
                  <div
                    id={`panel-${index}-content`}
                    className="hidden px-4 py-2"
                  >
                    <JobDetails job_info={job} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
