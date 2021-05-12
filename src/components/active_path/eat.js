import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class Eat extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>As you walk into the kitchen you smell bacon. It seems that you mom has started cooking breakfast. You go get changed as weel and after a shower you head downstairs to eat. The meal is delicious. Eggs made in the preffered style of those reciving them. Bacon cook to perfection. It was great as you start to get up yoou say "Thank you for the meal Mom. It was great." 
                <br></br> "Thank you John. Have a great day at work."
                <br></br> It is time to go get ready for work, but before you can your dad pulls you aside. "John I need you to take Alex to the library after you get back from work. We won't be able to do anything on wednesday because the car broke down. It is in the shop now but it looks like it might be awhile. So can you give Alex a ride after work?"
                <br></br> "Yeah dad of course but I got to go now."
                </p>
                <Link className="story-link" to="/prep">
                    You go and get ready for work.
                </Link>

            </div>
        )
    }
}