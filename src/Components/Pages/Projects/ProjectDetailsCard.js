import React from 'react';
import '../Projects/Project.css'
import close from '../../../images/close.png'


class ProjectDetailsCard extends React.Component
{
    render()
    {
       // Need to add the more details with the on click
        return <div className="Details" onClick={this.props.onClick}>
                    <div className="listTitle">
                        Technology Used
                        <img className="closeIcon" src={close}/>
                    </div>

                    <ul>
                        {this.props.project.technology.map(tech => {return <li>{tech}</li>})}
                    </ul>

                    <div className="dividerLine">{this.props.project.links}</div>
                 </div>
    }
}

export default ProjectDetailsCard