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
        this.imageCheck = this.imageCheck.bind(this);
        this.dateCheck = this.dateCheck.bind(this);
    }

    // Return special divs based on if the parent component is a Work component
    imageCheck(currentObject)
    {
        if(this.props.componentType == "Work")
        {
            return(<div>{currentObject.date}</div>)
        }

        else
        {
            return (<div><img src={currentObject.image}/></div>)
        }
    }

    // Check to see if the date is needed as part of the list break down
    dateCheck(currentObject)
    {
        if(this.props.componentType != "Work")
        {
            return (<h4>{currentObject.date}</h4>)
        }
    }

    // Sets up the links for each project
    setupLinks(links)
    {
        let linkList = [];
        let keys = Object.keys(links);

        // Add the links and the icons based on the links object
        for(let i = 0; i < keys.length; i++)
        {
            linkList.push(
                <a className = "listCardLink" href = {links[keys[i]]} target="_blank">
                    <img src={this.props.icons[keys[i]]}/>
                </a>
            )
        }
        return linkList;
    }
    
    // Function to create each card
    createCards() 
    {
        let cards = []
        let numObjects = this.props.allObjects.length

        for (let i = 0; i < numObjects; i++)
        {
            let currentObject = this.props.allObjects[i]
            let newCard = (
                <div className = "listCard">
                    {this.imageCheck(currentObject)}
                    
                    <div className="listCardtext">
                        <h3>{currentObject.title}</h3>
                        {this.dateCheck(currentObject)}

                        <div>{currentObject.description}</div>
                        <br/>
                        <div>{currentObject.technology}</div>
                        
                        {/* <div className="dividerLine">
                            {this.setupLinks(currentObject.links)}
                        </div> */}
                        {/* <div>this is where the links go</div> */}

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