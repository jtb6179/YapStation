import React, { Component } from 'react'

class HomeBabbles extends Component {
    render() {
        // let {text} = this.props.babble
        console.log(this.props.token);
        
        return (
            <div> 
             <span  className="card horizontal"> 
                {this.props.babble.text} <hr/>
                <button className="btn pulse">comment</button>
                </span>
            </div>
                 
        )
    }
}

export default HomeBabbles
