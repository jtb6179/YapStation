import React, { Component } from 'react'
import HomeBabbles from "./HomeBabbles"

class Home extends Component {

  state = { 
    babbles: []
  }
  componentDidMount(){
    fetch("http://localhost:3000/babbles")
      .then(res => res.json())
      .then((data) => {
       this.setState({ 
         babbles: data
        })
      })
  }
  render() {
    console.log(this.state);
    
    let theFeed = this.state.babbles.map((oneBab) => {
      return <HomeBabbles key={oneBab.id} bab={oneBab} token={this.props.token} />
    })
    return (
      <div>
        <h4>Where Your Non-sense thoughts are Free</h4>
            <div className="container control-scroll">
                  {theFeed}      
          </div>
      </div>
    )
  }
}

export default Home
