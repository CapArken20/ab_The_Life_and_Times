import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class IntroPage2 extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>They are doing good generally. They live in a good house and like where they are. They spend time together every Sunday playing board games or video games together. Every Wednesday Linda and Pete get eveyone in the car to take them to different activities. Everyone knows that if you want a ride to go somewhere this is when you get it.</p>
                <Link className="intro-links" to="/foo">
                    
                </Link>
            </div>
        )
    }
}