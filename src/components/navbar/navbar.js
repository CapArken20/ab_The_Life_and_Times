import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url : "",
            loading : false
        };

        this.handleSuccesfulSave = this.handleSuccesfulSave.bind(this);
        this.handleLoadStart = this.handleLoadStart.bind(this);
        this.handleSuccesfulLoad = this.handleSuccesfulLoad.bind(this);
    };

    handleSuccesfulSave() {
        const urlValue = window.location.href
        this.setState({
            url : urlValue
        }) 
    };

    handleLoadStart() {
        let urlValueStart = this.state.url;
        let urlValueIndex = urlValueStart.indexOf("/", 15);
        let urlValueSlice = urlValueStart.slice(urlValueIndex);

        this.setState({
            url : urlValueSlice,
            loading : true
        })   
    }

    handleSuccesfulLoad() {
        this.setState({
            loading : false
        })
    }

    render() {
        return (
            <div>
                <h4>The Life and Times</h4>
                <h4>By Aric Bell</h4>

                <Link to="/intro">Restart</Link>

                <button onClick={this.handleSuccesfulSave}>Save</button>
                <button onClick={this.handleLoadStart}>Load</button>
                {(this.state.loading === true) 
                ? 
                <Link onClick={this.handleSuccesfulLoad} className="warning_load" to={this.state.url}>Are you sure? Loading will make you lose your progress. Click here to continue.</Link> 
                : 
                null}
                
            </div>
        )
    }
}