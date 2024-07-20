import React from "react";
import "./Button.css";

// Component that breates the tab buttons on the navigation bar
// (App -> NavBar -> Button)
//  - id, onClick
class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // Sends back the id to the prop
  // Used for switching between the pages
  handleClick() {
    document
      .getElementById(this.props.id)
      .scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.id}</button>;
  }
}

export default Button;
