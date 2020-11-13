import React from 'react';
import '../Projects/Project.css'
import more from '../../../images/more.png'



class ProjectTitleCard extends React.Component
{
    render()
    {
        return <div className="ProjectTitle" >
                    <img src={this.props.project.image}/>

                    <div className="title">
                        {this.props.project.title}

                        <img className="detailsIcon" src={more}/>
                    </div>
                
                    <div className="description">{this.props.project.description}</div>
                 </div>
    }
}

export default ProjectTitleCard