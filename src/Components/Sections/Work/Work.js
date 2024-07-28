import React from "react";
import ReactGA from "react-ga";

import "./Work.css";
import JobSummary from "./JobSummary";
import JobDetails from "./JobDetails";

// Work component displaying job experiences with an accordion-style expandable view
class Work extends React.Component {
  // Work Objects with details for each job
  solute = {
    title: "Software Engineer",
    company: "SOLUTE",
    date: "Aug 2021 - Present",
    bullet_points: [
      "Backend work in Python, included various feature work, creating unit tests, adding data validation with pydantic.",
      "Also worked in a team to perform merge requests, debug errors before releases, and come up with new ideas for features/improvements.",
      "When the team needed it, spent time doing DevOps work to get Redmine running in a RKE2 environment.",
      "Developed a microservice in Golang that parses messages using Kafka in a publish-subscribe architecture.",
      "Documented legacy build and configuration systems using Gitlab Wiki. ",
      "Working on AGILE development schedule with 2-week sprints, managing issues with Gitlab. ",
    ],
    technology: ["Python", "Postgres", "Pydantic", "Swagger", "GitLab"],
    links: "SOLUTE A Sigma Defense Company", // Links for company information
  };

  CP = {
    title: "Computational Design Programmer",
    company: "Cuhaci & Peterson Architects",
    date: "Jan 2021 - Aug 2021",
    bullet_points: [
      "Developed automation scripts that create Revit models for teams within the company. ",
      "Used Computational Design to incorporate intelligence to make workflows more efficient. ",
      "Built team specific software such as a desktop GUI for teams to record locations of site photos.",
    ],
    technology: ["360 Photo Mapper", "Python", "Dynamo"],
    links: "Cuhaci & Peterson Architects", // Links for company information
  };

  shipt = {
    title: "Shipt Shopper",
    company: "Shipt",
    date: "Feb 2017 - Dec 2020",
    bullet_points: [
      "Shopped for and delivered groceries to the customer with in the delivery window. Along the way I would communicate with the customer about the status of their items.",
    ],
    technology: [], // No specific technology used
    links: "Shipt", // Links for company information
  };

  nass = {
    title: "Special Projects Assistant",
    company: "NASS",
    date: "Mar 2017 - Sep 2018",
    bullet_points: [
      "Performed various tasks that came up, which included employee computer setup and configuration, data entry, and budget organization.",
    ],
    technology: [], // No specific technology used
    links: "North American Sub Station Services", // Links for company information
  };

  summerCamp = {
    title: "Summer Camp Counselor",
    company: "Hunter's Creek Community Association",
    date: "Summer 2017 & 2018",
    bullet_points: [
      "Worked as a team with the other counselors to provide fun and safe activities for the campers",
    ],
    technology: [], // No specific technology used
    links: "Hunter's Creek Community Association", // Links for company information
  };

  // Array of all job objects
  allWork = [this.solute, this.CP, this.shipt, this.nass, this.summerCamp];

  render() {
    // Track page view with Google Analytics
    ReactGA.pageview("/Work");

    return (
      <div className="work py-8">
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
