import React, { Component } from "react";
import {
    Link
} from "react-router-dom";



export default class TitlePage extends Component {
    render() {
        return (
            <div className="story-wrapper">
                <div className="title-wrapper">
                <h1 className="title">The Life and Times</h1>
                <h3 className="author">By CapArken20</h3>


                <Link to="/intro">
                    Begin your journey
                </Link>
                </div>
            </div>
        )
    }
}