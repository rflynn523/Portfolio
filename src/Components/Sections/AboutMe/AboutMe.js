import React from "react";
import profile_pic from "../../../images/profile_pics/spain.jpeg";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="flex items-center px-32 pt-44">
        {/* Picture on the left */}
        <div className="flex-shrink-0">
          <img
            src={profile_pic}
            alt="Image"
            className="size-128 rounded-full object-cover"
          />
        </div>

        {/* Intro paragraphs on the right */}
        <div className="ml-12">
          <div className="mb-12 bg-slate bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-base">
            As an engineer with nearly four years of experience, I am passionate
            about creating innovative software and exploring new technologies. I
            graduated from the University of Central Florida in December 2020
            and am currently working as a Software Engineer II at SOLUTE, a
            Sigma Defense company. Outside of work, I enjoy working on personal
            projects, keeping up with the NBA and NFL, and taking endless trips
            to Disney with my wife.
          </div>

          <div className="bg-slate bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-base">
            This web app is an extension of my resume, designed to showcase my
            skills and growth as a developer in a more interactive format. It
            reflects my journey through various technologies, projects, and work
            experiences. I particularly enjoy working on personal projects and
            continually refining them as I acquire new skills. This app serves
            as a tool to track and present my ongoing development in the tech
            industry.
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
