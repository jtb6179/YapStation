import React, { Component } from 'react'

class BabbleCard extends Component {

    render() {
        let {text} = this.props.babble
        // console.log(this.props.babble.comments);
        
        return (
            <div>
                <span  className="card horizontal"> 
                    <div  className="card-content">
                    {text} <hr/>
                    </div>
                    <div className="card-action">
                        <p>Likes: {this.props.babble.babble_likes.length} </p>
                        <p>comment: {this.props.babble.comments.length}</p>
                    </div>
                </span>
            </div>
        )
    }
}

export default BabbleCard
