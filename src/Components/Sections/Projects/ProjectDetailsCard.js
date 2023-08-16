import React from 'react';
import ReactGA from 'react-ga'
import './Project.css'
import close from '../../../images/close.png'


class ProjectDetailsCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.setupLinks = this.setupLinks.bind(this);            
    }

    setupLinks()
    {
        let linkList = [];
        let keys = Object.keys(this.props.project.links);

        // Add the links and the icons based on the links object
        for(let i = 0; i < keys.length; i++)
        {
            let link = keys[i];
            let typeOfLink = this.props.project.links[link];
            let icon = this.props.icons[typeOfLink]

            linkList.push(
                <a className = "detailLink" href = {link} onClick={e=>ReactGA.event({category:"Link Clicked", action:[keys[i]]})} target="_blank">
                    <img className = "linkIcon" src={icon} width ="18px" height="18px"/>
                </a>
            )
        }
        return linkList;
    }

    render()
    {
       // Need to add the more details with the on click
        return <div className="Details" onClick={this.props.onClick}>
                    <div className="listTitle">
                        Technology Used
                        <img className="closeIcon" src={close} width ="5px" height="5px"/>
                    </div>

                    <ul>
                        {this.props.project.technology.map(tech => {return <li>{tech}</li>})}
                    </ul>

                    <div className="dividerLine">
                        {this.setupLinks()}
                    </div>
                    
                 </div>
    }
}

export default ProjectDetailsCard