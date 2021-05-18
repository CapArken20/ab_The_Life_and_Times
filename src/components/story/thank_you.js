import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class ThankYou extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <p>Hey guys I know that was pretty short and that you probaly aren't satisfied but that is the end of what I have got for the first version of the story. The code and styles are all finialized so it really just is me having to build out the rest of the components the problem is there are dozens at least. So to make it easier on you and me this is the End. Thank You for reading. If the save function does not work it might have broke when I uploaded it. Sorry if that is the case.</p>
                <Link className="story-link" exact to="/">
                    Back to the Title Screen
                </Link>
            </div>
        )
    }
}