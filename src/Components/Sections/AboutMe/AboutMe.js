import React from "react";
import profile_pic from "../../../images/profile_pics/spain.jpeg";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="pt-16 xl:pt-20">
        {/* Name */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-nav-bar-font-color my-4 sm:my-12">
            Ryan Flynn
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row items-center px-4 sm:px-16 xl:px-32 ">
          {/* Picture on the left */}
          <div className="flex-shrink-0 mb-8 xl:mb-0">
            <img
              src={profile_pic}
              alt="Profile"
              className="size-48 sm:size-96 xl:size-128 rounded-full object-cover"
            />
          </div>

          {/* Intro paragraphs on the right */}
          <div className="xl:ml-12">
            <div className="mb-8 xl:mb-12 bg-slate bg-opacity-10 backdrop-blur-lg p-6 xl:p-8 rounded-lg shadow-lg text-base">
              As an engineer with nearly four years of experience, I am
              passionate about creating innovative software and exploring new
              technologies. I graduated from the University of Central Florida
              in December 2020 and am currently working as a Software Engineer
              II at SOLUTE, a Sigma Defense company. Outside of work, I enjoy
              working on personal projects, keeping up with the NBA and NFL, and
              taking endless trips to Disney with my wife.
            </div>

            <div className="bg-slate bg-opacity-10 backdrop-blur-lg p-6 xl:p-8 rounded-lg shadow-lg text-base">
              This web app is an extension of my resume, designed to showcase my
              skills and growth as a developer in a more interactive format. It
              reflects my journey through various technologies, projects, and
              work experiences. I particularly enjoy working on personal
              projects and continually refining them as I acquire new skills.
              This app serves as a tool to track and present my ongoing
              development in the tech industry.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
