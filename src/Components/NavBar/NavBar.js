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

                <Button id = "Home" />
                <Button id = "About Me" />
                <Button id = "Projects" />
                <Button id = "Work" />
                <Button id = "Contact" />
           </div>
        )
    }
}

export default NavBar;
    