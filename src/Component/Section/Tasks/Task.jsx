import React, { Component } from 'react';
import "./Task.css";

export default class Task extends Component {
    render() {
        // console.log(document.querySelector("#Task-img"));
        return (
            <div id="Task">
                <ul id="Parent-Task">
                    <li id='Task-img'><img src={this.props.img} alt="" /></li>
                    <li id='Task-name'><b>{this.props.name}</b></li>
                    <li id='Task-time'><b>{this.props.time}</b></li>
                    <li id='Task-btn'><button className='btn btn-primary' onClick={this.props.EventDelete}>انجام شد</button></li>
                </ul>
            </div>
        )
    }
}
