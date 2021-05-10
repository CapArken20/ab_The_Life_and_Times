import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class IntroPage extends Component {
    render() {
        return (
            <div>
                <p>Welcome to the Life and Times. This is a CYOA (Choose Your Own Adventure) "game". This game was made by me for a capstone project that I needed to do. I also am doing this for a Aaronic Priesthood Theme Challenge. That is what this should be. This is the start of my first draft and we will see how it goes.
                <br></br>
                <br></br>
                Now you will be playing as a boy named John. John is the oldest boy in a family of 6. His pastimes include reading and playing board games when he gets the chance. In this story you will decide how he will reacts to certain situations and that will determine the ending you get.</p>
                <Link to="/intro-family">
                    What about his family?  
                </Link>
            </div>
        )
    }
}