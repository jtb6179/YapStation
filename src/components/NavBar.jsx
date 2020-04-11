import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../image/YapStation logo.PNG'



class NavBar extends React.Component {

  state = {
    babbles: []
  }

    clickingLogOut = (event) => {
      let newClicked = !this.props.clickedState
       if (newClicked) {
       localStorage.clear(this.props.token)
      //  this.props.setBabblesBackToEmptyArray()
      }
      // fetch("http://localhost:3000/babbles")
      //   .then(res => res.json())
      //   .then((data) =>{
      //     data = []
      //     this.setState({
      //       babbles: data
      //     })
      //   })
    }

    render(){
      return(
        <nav>
      <div className="nav-wrapper red ">
      
      <span className="brand-logo" ><img src={logo} alt='yap' width="230"  height="auto" /></span>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              {
                 localStorage.token === "undefined" ? null : 
              <li>
                <NavLink to="/" className="tab">Home</NavLink>
              </li>
              }
              
              <li>
                <NavLink to="/login" className="tab">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register" className="tab">Register</NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="tab">Profile</NavLink>
              </li>
              <li >
                <NavLink to="/welcome/index" onClick={this.clickingLogOut()} className="tab">Log Out</NavLink>
              </li>
            </ul>
            </div>
    </nav>
  )
}
};

export default NavBar;