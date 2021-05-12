import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class FirstMorning extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>You wake up to your alarm going off. It is 6 AM and the sun is still hiding but it should rise soon. You know that if you don't get out of bed now you won't be able to work out or chat with your family before you need to go to work. You can sleep in of course. The blankets are nice and warm. Just the thought of drifting back off makes you feel sleepy. What will you do?</p>
                <Link className="story-link" to="/sleep-in">
                    Sleep In
                </Link>
                <Link className="story-link" to="/wake-up">
                    Wake Up
                </Link>
            </div>
        )
    }
}