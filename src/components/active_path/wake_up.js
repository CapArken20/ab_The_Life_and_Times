import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class WakeUp extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>You know the importance of staying healthy and that you need to get to work on time. The fact of the matter is you need to get up. "Goodbye bed" you say mournfully as you get up. The colder air outside your blankets helps you wake up as you get ready for the day. And after putting on a workout suit you are ready to start the morning.</p>
                <Link className="story-link" to="/workout">
                    You go workout.
                </Link>

            </div>
        )
    }
}