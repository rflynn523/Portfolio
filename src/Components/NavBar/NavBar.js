import React from 'react';
import './NavBar.css'
import Button from '../Button/Button'

class NavBar extends React.Component
{
    render()
    {
        return(
            <div className="grid-navBar">
                <div className="name">Ryan Flynn</div>
                {/* Are getting the activeComponentName from this.props.activeComponent */}
                {/* {this.getListOfButtons()} */}

                <Button id = "Home" onClick={this.props.onClick} active = {this.props.activeComponent} updateNav={this.setActive}></Button>,
                <Button id = "Education" onClick={this.props.onClick} activeComponent={this.props.activeComponent} updateNav={this.setActive}></Button>,
                <Button id = "Skills" onClick={this.props.onClick} updateNav={this.setActive}></Button>,
                <Button id = "Projects" className="call" onClick={this.props.onClick} activeComponent={this.props.activeComponent} updateNav={this.setActive}></Button>,
                <Button id = "Work Experience" onClick={this.props.onClick} updateNav={this.setActive}></Button>,
                <Button id = "Resume?" onClick={this.props.onClick} updateNav={this.setActive}></Button>
           </div>
        )
    }
}

export default NavBar;
    