import React from "react";
import Tooltip from "../Sections/AboutMe/ToolTip";

import "./Card.css";

class TechUsedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-slate bg-opacity-10 backdrop-blur-lg p-5 rounded-lg shadow-lg text-app-text-color">
        <div className="flex text-xl font-bold mb-5 border-2 rounded-full justify-center">
          {this.props.title}
        </div>
        <div className="flex flex-wrap gap-4 justify-evenly">
          {this.props.logos.map((logo, logoIndex) => {
            return (
              <Tooltip key={logoIndex} text={logo.tooltip}>
                <img
                  src={logo.image}
                  alt={`Image ${logoIndex + 1}`}
                  className="size-16 object-contain"
                />
              </Tooltip>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TechUsedCard;
