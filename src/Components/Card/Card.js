import React from 'react';
import ReactGA from 'react-ga'
import './Card.css';

// Card component responsible for taking in object of info and creating the card list
// (App -> Education -> Card)
//              - object

// (App -> Skills -> UnSelectedSkills -> Card)
//                          - object, onClick

// (App -> Skills -> SelectedSkill -> Card)
//                          - object, onClick
class Card extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick =this.handleClick.bind(this);
        this.makeList = this.makeList.bind(this);
        this.checkTitle = this.checkTitle.bind(this);

    }

    handleClick()
    {
        // Do Nothing if it is a card from the education page
        let title = this.props.object.title;

        if(title == "CS" || title == "EE" || title == "CpE")
            return;

        // Tracking specific events
        ReactGA.event({category: 'Selected a Skill', action: title})
        
        this.props.onClick(title);
    }

    // Takes the object and creates a list based of its info
    makeList()
    {
        let skills = Object.keys(this.props.object.items);
        let length = skills.length;

        let list = [];

        // Make a list of all the keys in the item attribute
        for(let i = 0; i < length; i++)
            list.push(<li>{skills[i]}</li>)

        return list;
    }

    // Function to handle the two different types of cards
    checkTitle()
    {
        let title = this.props.object.title;
        let className = "card"

        // Set the className, specify if education card so the cards do not hover
        if(title == "CS" || title == "EE" || title == "CpE")
            className = "education-card";

        else
            className = "card"
        
        return(
            <div className={className} onClick={this.handleClick}>
                {/* Also need to change the title to access the object */}
                <div className='cardTitle'>{this.props.object.title}</div>
                <ul>
                    {/* Creates all the list items from the passed in list */}
                    {this.makeList()}
                </ul>
             </div>)
    }

    render()
    {
        return(this.checkTitle());
    }
}

export default Card;