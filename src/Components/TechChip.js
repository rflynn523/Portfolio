import React from "react";

class TechChip extends React.Component {
  render() {
    return (
      <span
        key={this.props.index}
        className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-chip-color text-app-text-color"
        style={{ marginRight: "8px", marginBottom: "4px" }}
      >
        {this.props.technology}
      </span>
    );
  }
}

export default TechChip;
