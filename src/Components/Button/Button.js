import React from 'react';

class Button extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.onClick(this.props.className);
    }

    render()
    {
        return <button className={this.props.className} onClick={this.handleClick}>{this.props.className}</button>
    }
}

export default Button;