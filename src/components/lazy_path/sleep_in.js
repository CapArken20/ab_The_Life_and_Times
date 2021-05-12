import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class SleepIn extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>You know the importance of sleep and without it you will most likely be grumpy. After all you need to be happy at work. If not the customers might be annoyed with you because they feel like you are being mean. You already have a warning for snapping at a customer so you decide sleep is the way to go.</p>
                <Link className="story-link" to="/prep">
                    You get up after another 2 hours of sleep.
                </Link>

            </div>
        )
    }
}