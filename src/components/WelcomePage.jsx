import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import "../LandingPage.css"
// import info from "../image/YapStation.jpg"

export class WelcomePage extends Component {
    state = {
        clickedPic: false
    }

    handleClickedDiv = (event) => {
        console.log(event.target);
        this.setState({
            clickedPic: !this.state.clickedPic
        })
        this.props.history.push(`/register`);
    }

    render() {
        return (
            <div className="row">
            <div className="col s6 offset-s1">
                <div className="wrapper col" onClick={this.handleClickedDiv}>
                        <div className="card-thing">
                            <h1>
                            <span className="enclosed">Create</span>profile
                            </h1>
                        </div>
                </div>
            </div>
            <div className="col s2">
                <div className="wrapper col" onClick={this.handleClickedDiv}>
                        <div className="card-thing">
                            <h1>
                            <span className="enclosed">Post</span>Your Feeling & secrets
                            </h1>
                        </div>
                </div>
            </div>
            <div className="center-piece">
                <div className="wrapper col" onClick={this.handleClickedDiv}>
                        <div className="card-thing">
                            <h1>
                            <span className="enclosed">Enjoy</span>Your Dashboard
                            </h1>
                        </div>
                </div>
            </div>
            <section className="section-portion">
                <div className="warp">
                </div>
            </section>
            </div>
        )
    }
}

export default withRouter(WelcomePage)
