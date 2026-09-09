import React from "react";
import Title from "../../common/Title";
import TechUsedCard from "./TechUsedCard";
import tech_used_data from "./tech-used-data";

class Technologies extends React.Component {
  render() {
    return (
      <div className="pt-20 xl:pt-24 px-4 lg:px-16">
        {/* Grid for the Tech Used */}
        <Title text="Technologies" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 sm:mx-4 lg:mx-8">
          {Object.values(tech_used_data).map((card) => (
            <div key={card.title}>
              <TechUsedCard title={card.title} logos={card.logos} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Technologies;
