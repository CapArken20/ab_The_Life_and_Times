import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "",
            url_backup: "",
            loading: false
        };

        this.handleSuccesfulSave = this.handleSuccesfulSave.bind(this);
        this.handleLoadStart = this.handleLoadStart.bind(this);
        this.handleSuccesfulLoad = this.handleSuccesfulLoad.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    };

    handleRestart() {
        this.setState({
            loading: false
        })
    }

    handleSuccesfulSave() {
        const urlValueStart = window.location.href;
        const urlValueIndex = urlValueStart.indexOf("/", 15);
        const urlValueSlice = urlValueStart.slice(urlValueIndex);
        this.setState({
            url: urlValueSlice,
        })
    };



    handleLoadStart() {
        this.setState({
            loading: true
        })
    }

    handleSuccesfulLoad() {
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div className="navbar-wrapper">
                <h4>The Life and Times <br></br>
                    By CapArken20</h4>

                <Link onClick={this.handleRestart} to="/intro">Restart</Link>
                <div className="save-load-wrapper">
                    <button className="btn-standard" onClick={this.handleSuccesfulSave}> <FontAwesomeIcon icon="save" /> Save</button>
                    <button className="btn-standard" onClick={this.handleLoadStart}>
                     <FontAwesomeIcon icon="save" /> Load</button>
                    {(this.state.loading === true)
                        ?
                        <Link onClick={this.handleSuccesfulLoad} className="warning-load" to={this.state.url}>Are you sure? Loading will make you lose your progress. Click here to continue.</Link>
                        :
                        null}
                </div>
            </div>
        )
    }
}