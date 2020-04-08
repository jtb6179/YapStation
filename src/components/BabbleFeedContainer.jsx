import React, { Component } from 'react'
import BabbleCard from "./BabbleCard"

class BabbleFeedContainer extends Component {

    render() {
        let theFeed = this.props.babbles.map((oneBab) => {
            return <BabbleCard key={oneBab.id} babble={oneBab} token={this.props.token} />
        })
        return (
            <div>
                {theFeed}
            </div>
        )
    }
}

export default BabbleFeedContainer
