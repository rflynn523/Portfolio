import React from 'react';
import './NavBar.css'

class NavBar extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.onClick("home")
    }

    render()
    {
        return(
            <div className="grid-navBar">
                <div className="name">Ryan</div>
                <div className = "home" onClick={this.handleClick}>{this.props.activeComponent}</div>
                <div className="name">Flynn</div>
           </div>
        )
    }
}

export default NavBar;
    