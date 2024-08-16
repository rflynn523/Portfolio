import React from "react";
import Title from "../../Title";
import TechUsedCard from "../../Card/TechUsedCard";
import tech_used_data from "./tech-used-data";

class Technologies extends React.Component {
  card_info = [
    tech_used_data.prog_lang,
    tech_used_data.libraries,
    tech_used_data.tools,
    tech_used_data.databases,
    tech_used_data.devops,
    tech_used_data.hardware,
  ];

  render() {
    return (
      <div className="pt-20 xl:pt-24 px-4 lg:px-16">
        {/* Grid for the Tech Used */}
        <Title text="Technologies" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 sm:mx-4 lg:mx-8">
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

export default Technologies;
