import Form from './components/UserForm'
// import Home from './components/Home'
import NavBar from './components/NavBar'
import RegisterForm from './components/UserRegisterForm'
import ProfileContainer from './components/ProfileContainer'
import {Switch, Route, withRouter} from 'react-router-dom'
// import AppWrapper from "./components/commentsFolder/AppWrapper"
import WelcomePage from './components/WelcomePage'
import './App.css';
import React, { Component } from 'react'
import Home from './components/Home'


class App extends Component {

  state = {
    user: {
      username: "",
      profile_name:"",
      bio: "",
      age: 0,
      location: "",
      education_status: "",
      gender: "",
      contact_info: ""
    },
    babbles: [],
    token: "",
    clicked: false
  }

    handleResp = (resp) => {
      // console.log(resp.user); 
        if (resp.user) {
          localStorage.setItem('token', resp.token)
          this.setState({
            user: resp.user,
            babbles: resp.user.babbles,
            token: resp.token
          }, () => {
            this.props.history.push("/profile")
          })
        }
        else {
          alert(resp.error)
        }
      }

      handleLogOut = () => {
        this.setState({
          user: { username: "",
          profile_name:"",
          bio: "",
          age: 0,
          location: "",
          education_status: "",
          gender: "",
          contact_info: ""}
        })
      }
 
    componentDidMount() {
      if (localStorage.getItem("token")) {
        fetch("http://localhost:3000/api/v1/persist", {
          headers: {
            "Authorization": `Bearer ${localStorage.token}`
          }
        })
          .then(r => r.json())
          .then(this.handleResp)
      }
    }

    
    addOneBabble = (babObj) => {
        this.setState({
        babbles: [...this.state.babbles, babObj]
        })
    }
handleLoginSubmit = (userInfo) => {
  console.log('login')
  return fetch('http://localhost:3000/api/v1/login', {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then( resp => resp.json())
  .then( this.handleResp )
}

handleRegisterSubmit = (userInfo) => {
  console.log(userInfo)
  userInfo.education_status = userInfo.education_status.value
  return fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then( resp => resp.json())
  .then( this.handleResp)
}


addFriends = (userClicked) => {
    // userInfo.friends 
      fetch(`http://localhost:3000/friendships`, {
          method: "POST",
          headers: {
              'content-type': "application/json",
              "Authorization": `Bearer ${localStorage.token}`
          }, body: JSON.stringify({friend_id: userClicked.id})
      })
          .then(res => res.json())
          .then( 
            ()=>{
            alert(`Yay!!! you now Friends with ${userClicked.profile_name}`)
          }
          )
  }



renderRegisterForm = (routerProps) => {
  if (routerProps.location.pathname === "/register") {
    return <RegisterForm formName="Register Form" handleSubmit={this.handleRegisterSubmit} />
  }else if(routerProps.location.pathname === "/login") {
    return <Form formName="Log into Account" handleSubmit={this.handleLoginSubmit} />
  }
}

renderProfile = (routerProps) => {
return <ProfileContainer  user={this.state.user} token={this.state.token} 
                                          addOneBabble={this.addOneBabble} 
                                          babbles={this.state.babbles} />
      }

  WhenRenderingHome = (routerProps) => {
    console.log(this.state.token);
    if (this.state.token === "") {
      return <WelcomePage />
    } else if(routerProps.location.pathname === "/") {
      return <Home user={this.state.user} addFriends={this.addFriends} token={this.state.token}  
      // {/*searching={this.returnsAnArray()}*/}

      />

    }
  }

  
  // returnsAnArray = () => {
  //   let {user, searchTerm} = this.state
  //   let filteredArray = user.filter((oneUser) => {
  //     return oneUser.location.includes(searchTerm) 
  //   })
  //   return filteredArray
  // }


  render() {
    // console.log(this.p);
    
    return (
      <div>
      
        <NavBar clickedState={this.state.clicked} token={this.state.token} 
        logOut={this.handleLogOut} setBabblesBackToEmptyArray={this.setBabblesBackToEmptyArray} />
        
          <Switch>
            <Route path="/login" render={ this.renderRegisterForm } />
            <Route path="/register" render={ this.renderRegisterForm } />
            <Route path="/profile" render={ this.renderProfile } />
            <Route path="/" render={this.WhenRenderingHome} />
            <Route path="/welcome/index" exact component={ WelcomePage }/>
            <Route render={ () => <p>Page not Found</p> } />
          </Switch>
      </div>
    )
  }
}

export default withRouter(App)

