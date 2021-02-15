import React from 'react';
import './DetailedCard.css';

// The component that creates the card with more detail on the skills page
// (App -> Skills -> SelectedSkill -> Detailled card)
//             - object, onSelected
class DetailedCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.makeList = this.makeList.bind(this);

    }

    handleClick()
    {
        this.props.onClick();
    }

    makeList()
    {
        // Grabs the arrays of keys and values
        let skills = Object.keys(this.props.object.items);
        let details = Object.values(this.props.object.items);
        let length = skills.length;

        let list = [];

        // Loops through those arrays and creates the list items
        for(let i = 0; i < length; i++)
        {
            list.push(<div>
                        <li className="skillTitle">{skills[i]}</li>
                            <ul>
                                <li className="detail">{details[i]}</li>
                            </ul>
                    </div>);
        }

        return list;
    }

    render()
    {
        return(
            <div className="detailedCard" onClick={this.handleClick}>
                <div className='cardTitle'>{this.props.object.title}</div>

                <ul>
                    {/* Creates all the list items from the passed in object*/}
                    {this.makeList()}
                </ul>
            </div>
        );
    }
}

export default DetailedCard;