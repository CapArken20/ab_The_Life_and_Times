import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class Prep extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>You start to prep for work. You have very litle time as it is currently 9 AM and you have to be there at !0 AM so you go and try to speedily get though everything you need to do. By the time you finish it is 10:30 AM and you need to go. You rush out the door with a couple of shouted "Goodbye. I love you." And then you are on your way.</p>
                <Link className="story-link" to="/work">
                    You get drive to work.
                </Link>

            </div>
        )
    }
}