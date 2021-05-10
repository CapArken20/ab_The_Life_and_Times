import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class IntroPage1 extends Component {
    render() {
        return (
            <div>
                <p>His parents Linda and Pete are very loving but are kind of swapmed when it come to dealing with kids. There are many reasons for this most are not important but a major part of it is the fact that they both have jobs to help support the family.<br></br>
                John has three younger siblings. The second of the four kids is a boy named Joseph. Joseph likes to play with friends and will sometimes get into trouble because he is mixed up with the wrong people. Sam is the third of four kids. He like to play baseball and has made it a goal to became a famous player. The last sibling is Alex. He is the fourth of four. he likes to spend his time playing video games. he gets into trouble a lot because he will stay up or wake up early to play them.</p>
                <Link to="/intro-situation">
                    And how are they?  
                </Link>
            </div>
        )
    }
}