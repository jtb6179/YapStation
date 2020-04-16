import React, { Component } from 'react'
import HomeBabbles from "./HomeBabbles"
import SearchBox from './SearchBox'
import UserCard from "./UserCard"


class Home extends Component {

  state = { 
    babbles: [],
    user: []
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

  giveMeUsers = (event) => {
    
  }
  

  
  render() {
    console.log(this.props.user);
    
    let theFeed = this.state.babbles.map((oneBab) => {
      return <HomeBabbles key={oneBab.id} bab={oneBab} token={this.props.token} />
    })
    return (
  <div className="row">
    <div className="col s6">
      <SearchBox user={this.props.user} changeSearchTerm={this.props.changeSearchTerm} babbles={this.state.babbles}/>
      <UserCard searching={this.props.searching}/>
    </div>
      <div className="col s6 control-scroll">
      {/* {this.handleWhetherLoggedIn} */}
            {theFeed}      
    </div>
  </div>
    )
  }
}

export default Home
