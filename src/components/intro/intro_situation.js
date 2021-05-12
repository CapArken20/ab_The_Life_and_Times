import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class IntroPage2 extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>They are doing good generally. They live in a good house and like where they are. They spend time together every Sunday playing board games or video games together. Every Wednesday Linda and Pete get eveyone in the car to take them to different activities. Everyone knows that if you want a ride to go somewhere this is when you get it. Of course they have 2 cars but one is for John as he needs transportation to work. When he has time he also helps shuttle people to and from activties like baseball games or Friday Night Magic. The family is pretty active in the neighborhood trying to keep themselves and their neighbors safe.
                <br></br>
                <br></br>
                Now that the exposition is done you can continue on with the game.
                </p>
                <Link className="story-link" to="/first-morning">
                    John wakes up.
                </Link>
            </div>
        )
    }
}