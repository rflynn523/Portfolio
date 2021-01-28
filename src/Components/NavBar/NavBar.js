import React from 'react';
import './NavBar.css'
import Button from '../Button/Button'

class NavBar extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.onClick(this.props.className)
    }

    render()
    {
        return(
            <div className="grid-navBar">
                <div className="name">Ryan Flynn</div>
                
                <Button className = "Home" onClick={this.props.onClick}></Button>
                <Button className = "Projects" onClick={this.props.onClick}></Button>
                <Button className = "Education" onClick={this.props.onClick}></Button>
                <Button className = "Skills" onClick={this.props.onClick}></Button>
                <Button className = "Projects" onClick={this.props.onClick}></Button>
                <Button className = "Work Experience" onClick={this.props.onClick}></Button>
                <Button className = "Contact" onClick={this.props.onClick}></Button>
           </div>
        )
    }
}

export default NavBar;
    