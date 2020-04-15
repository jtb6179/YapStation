import React, { Component } from 'react'
// import backGroundImg from "../image/marco-chilese-DigI2ej3AFw-unsplash.jpg"
import "../LandingPage.css"
// import info from "../image/YapStation.jpg"

export class WelcomePage extends Component {
    render() {
        return (
            <div className="row">
            <div className="col s6 offset-s1">
                <div class="wrapper col">
                        <div class="card-thing">
                            <h1>
                            <span class="enclosed">Create</span>profile
                            </h1>
                        </div>
                </div>
            </div>
            <div className="col s2">
                <div class="wrapper col">
                        <div class="card-thing">
                            <h1>
                            <span class="enclosed">Post</span>Your Feeling & secrets
                            </h1>
                        </div>
                </div>
            </div>
            <div className="center-piece">
                <div class="wrapper col">
                        <div class="card-thing">
                            <h1>
                            <span class="enclosed">Enjoy</span>Your Dashboard
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

export default WelcomePage
