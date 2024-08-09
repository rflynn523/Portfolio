import React from "react";
import ReactGA from "react-ga";

import engBuilding from "../../../images/profile_pics/profile.jpg";
import TechUsedCard from "../../Card/TechUsedCard";
import tech_used_data from "./tech-used-data";

class AboutMe extends React.Component {
  card_info = [
    tech_used_data.prog_lang,
    tech_used_data.libraries,
    tech_used_data.tools,
    tech_used_data.databases,
    tech_used_data.devops,
    tech_used_data.hardware,
  ];

  render() {
    // To report page view
    ReactGA.pageview("/AboutMe");

    return (
      <div>
        <div className="flex items-center p-32">
          {/* Picture on the left */}
          <div className="flex-shrink-0">
            <img
              src={engBuilding}
              alt="Image"
              className="size-128 rounded-full object-cover"
            />
          </div>

          {/* Intro paragraph on the right */}
          <div className="ml-12">
            <div className="mb-12 bg-slate bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-app-text-color text-base">
              A young engineer with a growing passion for creating software and
              learning about new technology. I recently graduated from UCF in
              December of 2020 and I am currently working as a Software Engineer
              at SOLUTE. My most recent personal project is an IOS app called
              "Savings Mapper". You can check it out on the App Store.
            </div>

            <div className="bg-slate bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-app-text-color text-base">
              This web app serves as an extension of my resume and also gave me
              the opportunity to learn ReactJS. It features more information
              displayed in a more interactive way. I am now using it to
              personally track my growth as a developer through my projects,
              skills, and work experience.
            </div>
          </div>
        </div>

        {/* Grid for the Tech Used */}
        <div className="grid grid-cols-3 gap-10 mx-24">
          {this.card_info.map((card, index) => (
            <div key={card.id}>
              <TechUsedCard title={card.title} logos={card.logos} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default AboutMe;
