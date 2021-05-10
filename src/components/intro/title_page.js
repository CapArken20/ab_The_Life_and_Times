import React, { Component } from "react";
import {
    Link
} from "react-router-dom";



export default class TitlePage extends Component {
    render() {
        return (
            <div>
                <h1>The Life and Times</h1>
                <h3>By CapArken20</h3>


                <Link to="/intro">
                    Begin your journey
                </Link>
                {/* Link to next page */}
            </div>
        )
    }
}