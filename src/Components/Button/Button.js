import React from 'react';
import './Button.css'

class Button extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.onClick(this.props.id);
    }

    render()
    {
        return <button onClick={this.handleClick}>{this.props.id}</button>
    }
}

export default Button;