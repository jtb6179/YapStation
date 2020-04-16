import React, { Component } from 'react'
import HomeBabbles from "./HomeBabbles"
import SearchBox from './SearchBox'
import UserContainer from "./UserContainer"


class Home extends Component {

  state = { 
    babbles: [],
    user: [],
    searchTerm: ""
  }
  componentDidMount(){
    fetch("http://localhost:3000/babbles")
      .then(res => res.json())
      .then((data) => {
       this.setState({ 
         babbles: data
        })
      })
      fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then((aUser) => {
          this.setState({
            user: aUser
          })
        })
  }

  
  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  returnsAnArray = () => {
      let {user, searchTerm} = this.state
      let filteredArray = user.filter((oneUser) => {
        return oneUser.location.includes(searchTerm) 
      })
      return filteredArray
    }

  
  render() {
    console.log(this.props.user);
    
    let theFeed = this.state.babbles.map((oneBab) => {
      return <HomeBabbles key={oneBab.id} bab={oneBab} token={this.props.token} />
    })
    return (
  <div className="row">
    <div className="col s6">
      <SearchBox user={this.props.user} searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} babbles={this.state.babbles}/>
      <UserContainer addFriends= {this.props.addFriends} current_user={this.props.user} users={this.returnsAnArray()} token={this.props.token} />
    </div>
      <div className="col s6 control-scroll">
            {theFeed}      
    </div>
  </div>
    )
  }
}

export default Home
