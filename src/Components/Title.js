import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-nav-bar-font-color mb-8 underline underline-offset-8 decoration-4 decoration-with-green">
          {this.props.text}
        </h2>
      </div>
    );
  }
}

export default Title;
