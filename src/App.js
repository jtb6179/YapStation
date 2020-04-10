import Form from './components/UserForm'
import Home from './components/Home'
import NavBar from './components/NavBar'
import RegisterForm from './components/UserRegisterForm'
import ProfileContainer from './components/ProfileContainer'
import {Switch, Route, withRouter} from 'react-router-dom'
// import JwtDecode from 'jwt-decode';
import WelcomePage from './components/WelcomePage'
import './App.css';
import React, { Component } from 'react'


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
        if (resp.user) {
          localStorage.token = resp.token
          this.setState({
            user: resp.user,
            token: resp.token
          }, () => {
            this.props.history.push("/profile")
          })
        }
        else {
          alert(resp.error)
        }

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

  setBabblesBackToEmptyArray = () => {
    this.state.babbles.splice()
  }
  render() {
    return (
      <div>
        <NavBar clickedState={this.state.clicked} token={this.state.token} 
        babbles={this.state.babbles} setBabblesBackToEmptyArray={this.setBabblesBackToEmptyArray} />
          <Switch>
            <Route path="/login" render={ this.renderRegisterForm } />
            <Route path="/register" render={ this.renderRegisterForm } />
            <Route path="/profile" render={ this.renderProfile } />
            <Route path="/" exact component={ Home } />
            <Route path="/welcome/index" exact component={ WelcomePage }/>
            <Route render={ () => <p>Page not Found</p> } />
          </Switch>
      </div>
    )
  }
}

export default withRouter(App)

