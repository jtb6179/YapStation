import React, { Component } from 'react'

class HomeBabbles extends Component {

    render() {
        // let {text} = this.props.babble
        console.log(this.props);
        
        return (
            <div> 
             <span  className="card horizontal"> 
                {this.props.bab.text} <hr/>
                <button className="btn pulse">comment</button>
                </span>
            </div>
                 
        )
    }
}

export default HomeBabbles
