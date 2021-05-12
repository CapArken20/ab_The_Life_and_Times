import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class Workout extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>As you head downstairs you run into Sam. He looks like he just got out of bed and is still in his PJs. You realize that you must have woken him up while getting ready to work out. Thinking about this you make a decision. 
                <br></br> "Hey Sam. Why don't you come workout with me?" As you say this he just stares blankly at you. Then after a moment the words process in his head and he perks up. Then as he opens his mouth to speak he slupms again.
                <br></br> "I don't have an offit to workout in. Most of my clothes are in the wash." 
                <br></br> After considering for a monent you look at him and say, "You will be fine just wear your PJs. The offit is more for if it becomes a daily thing." 
                <br></br> This make him smile as you head out to the gym. You know that at first Sam maybe a bit self concious but he should be fine once he starts working out. After all he always liked to compete. So you get in the car and head to the gym.
                <br></br>
                <br></br> You get back after an hour of working out. Not as long as normal perhaps but Sam has wiped out and you could always the extra time to get better prepared for work.
                </p>
                <Link className="story-link" to="/eat">
                    You go eat.
                </Link>

            </div>
        )
    }
}