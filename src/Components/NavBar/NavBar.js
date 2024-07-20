import React from 'react';
import './NavBar.css'
import Button from '../Button/Button'

// NavBar Component, contains the listed out tab Buttons
// (App -> NavBar)
//  - isActive, activeComponent, onClick
class NavBar extends React.Component
{
    render()
    {
        return(
            <div className="grid-navBar">
                <div className="name">Ryan Flynn</div>

                <Button className = "unselected" id = "Home" onClick={this.props.onClick} />
                <Button id = "Education" onClick={this.props.onClick} />
                <Button id = "Skills" onClick={this.props.onClick} />
                <Button id = "Projects" onClick={this.props.onClick} />
                <Button id = "Work Experience" onClick={this.props.onClick} />
           </div>
        )
    }
}

export default NavBar;
    