import React from "react";
import Card from "../../Card/Card";
import DetailedCard from "../../Card/DetailedCard";

// The SelectedSkill component displayed once a group is selected
// (App -> Skills -> SelectedSkill)
//             - allObjects, onSelected

class SelectedSkill extends React.Component {
  // Objects can be saved here so they can be called by name below
  programming_Language_Object = this.props.allObjects[0];
  IDEs_Object = this.props.allObjects[1];
  libraries_Object = this.props.allObjects[2];
  databases_Object = this.props.allObjects[3];
  hardware_Object = this.props.allObjects[4];
  circuitSim_Object = this.props.allObjects[5];
  other_Object = this.props.allObjects[6];

  titles = this.props.allObjects.map((object) => {
    return object.title;
  });

  // Used so the names only need to be changed once in Skills.js
  progLang_Title = this.titles[0];
  IDEs_Title = this.titles[1];
  libraries_Title = this.titles[2];
  databases_Title = this.titles[3];
  hardware_Title = this.titles[4];
  ciruitSim_Title = this.titles[5];
  other_Title = this.titles[6];

  constructor(props) {
    super(props);

    this.updateActiveCard = this.updateActiveCard.bind(this);
    this.getOtherCards = this.getOtherCards.bind(this);

    // Initially Set the state to the card that was selected in the unselected state
    this.state = {
      activeCard: this.updateActiveCard(this.props.active),
      activeCardIndex: this.titles.indexOf(this.props.active),
    };
  }

  updateActiveCard(id) {
    let index;
    let selectedObject;

    switch (id) {
      // Programming Languages
      case this.progLang_Title:
        selectedObject = this.programming_Language_Object;
        index = 0;

        break;

      // IDEs
      case this.IDEs_Title:
        selectedObject = this.IDEs_Object;
        index = 1;
        break;

      // "Libraries/FrameWorks"
      case this.libraries_Title:
        selectedObject = this.libraries_Object;
        index = 2;
        break;

      // Databases
      case this.databases_Title:
        selectedObject = this.databases_Object;
        index = 3;
        break;

      // Hardware
      case this.hardware_Title:
        selectedObject = this.hardware_Object;
        index = 4;
        break;

      // Circuit Simulation
      case this.ciruitSim_Title:
        selectedObject = this.circuitSim_Object;
        index = 5;
        break;

      // Other
      case this.other_Title:
        selectedObject = this.other_Object;
        index = 6;
        break;

      default:
        selectedObject = this.programming_Language_Object;
        index = 0;
    }

    this.setState({
      activeCard: (
        <DetailedCard onClick={this.props.onSelected} object={selectedObject} />
      ),
      activeCardIndex: index,
    });

    // Only need initially
    return (
      <DetailedCard onClick={this.props.onSelected} object={selectedObject} />
    );
  }

  // Function need to display all of the unselected cards
  getOtherCards() {
    let otherCards = [];

    for (let i = 0; i < this.props.allObjects.length; i++)
      if (i === this.state.activeCardIndex) continue;
      else
        otherCards.push(
          <Card
            onClick={this.updateActiveCard}
            object={this.props.allObjects[i]}
          />,
        );

    return otherCards;
  }

  render() {
    return (
      <div className="selected">
        {this.state.activeCard}

        <div className="otherSkillGroups">
          {/* Function call to place all of the other lists */}
          {this.getOtherCards()}
        </div>
      </div>
    );
  }
}

export default SelectedSkill;
