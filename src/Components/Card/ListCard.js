import React from 'react'
import ReactGA from 'react-ga'

import './ListCard.css'

// (App -> Work -> ListCard)
//              - List of objects

// Next I would look at the CSS and add more work experience for testing
class ListCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.createCards = this.createCards.bind(this);
    }
    
    createCards() 
    {
        let cards = []
        let numObjects = this.props.allObjects.length

        for (let i = 0; i < numObjects; i++)
        {
            let currentObject = this.props.allObjects[i]
            let newCard = (
                <div className = "listCard">
                    <div>Image goes here</div>
                    {/* <div className = "image"></div> */}

                    <div className="listCardtext">
                        <h3>{currentObject.title}</h3>
                        <h4>{currentObject.date}</h4>

                        <div>{currentObject.description}</div>
                        <br/>
                        <div>{currentObject.technology}</div>
                        <div>this is where the links go</div>

                    </div>
                </div>
            )
            
            cards.push(newCard)
        }    

        return cards;
    }

    render()
    {
        return(this.createCards())       
    }

}

export default ListCard