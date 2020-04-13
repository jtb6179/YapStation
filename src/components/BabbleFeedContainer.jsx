import React, { Component } from 'react'
import BabbleCard from "./BabbleCard"


class BabbleFeedContainer extends Component {
    

    render() {
        let theFeed = this.props.babbles.map((oneBab) => {
            return <BabbleCard key={oneBab.id} id={oneBab.id} babble={oneBab} token={this.props.token}  
                                             setBabble={this.props.setBabble} 
                                            //  babble_likes={this.props.userInstance.babble_likes}
                                             />
        })
        return (
            <div className="control-scroll">
                {theFeed}
            </div>   
        )
    }
}

export default BabbleFeedContainer
