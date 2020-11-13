import React from 'react';
import Card from '../../Card/Card';

class UnSelectedSkills extends React.Component
{
    // Objects can be saved here so they can be called by name below
    programming_Language_Object = this.props.allObjects[0];
    IDEs_Object = this.props.allObjects[1];
    libraries_Object = this.props.allObjects[2];
    databases_Object = this.props.allObjects[3];
    hardware_Object = this.props.allObjects[4];
    circuitSim_Object = this.props.allObjects[5];
    other_Object = this.props.allObjects[6];

    render()
    {
        return(<div className="unselected">
        <div className="firstRow">
            <Card object={this.programming_Language_Object} onClick={this.props.onUnselected}/>
            <Card object={this.IDEs_Object} onClick={this.props.onUnselected}/>
            <Card object={this.libraries_Object} onClick={this.props.onUnselected}/>
            <Card object={this.databases_Object} onClick={this.props.onUnselected}/>
        </div>

        <div className="secondRow">
            <Card object={this.hardware_Object} onClick={this.props.onUnselected}/>
            <Card object={this.circuitSim_Object} onClick={this.props.onUnselected}/>
            <Card object={this.other_Object} onClick={this.props.onUnselected}/>
        </div>
    </div>)
    }
}

export default UnSelectedSkills