import React, { Component } from 'react'

class HomeBabbles extends Component {

    render() {
        // let {text} = this.props.babble
        console.log(this.props.token);
        
        return (
            <div> 
                <div  className="card-home"> 
                    {this.props.bab.text}
                    <input type="text" name="text"  className="materialize-textarea" 
                                        // onChange={this.handleChange} 
                                        // value={this.state.text} 
                                        />
                    <button className=" waves-effect btn-small" >Post your Babble</button>
                    </div>
            </div>
                 
        )
    }
}

export default HomeBabbles
