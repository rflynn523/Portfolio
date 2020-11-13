import React from 'react';
import Button from '../../Button/Button'
import '../PageList/PageList.css'

class PageList extends React.Component
{
    render()
    {
        return(
            <div className="grid-pageList">
                <Button className="About" onClick={this.props.onClick}></Button>
                <Button className="Skills" onClick={this.props.onClick}></Button>
                <Button className="Education" onClick={this.props.onClick}></Button>
                <Button className="Projects" onClick={this.props.onClick}></Button>
                <Button className="Contact" onClick={this.props.onClick}></Button>
            </div>
        )
    }
}

export default PageList;