import React from 'react';
import {NavLink} from 'react-router-dom'
import "../App.scss"
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//   let navButton = document.querySelector('.navigation-button');
//   let navMenu = document.querySelector('.navigation-menu');
//   let win = window;
class NavBar extends React.Component {

  state = {
    // babbles: [],
    isToggleOn: false
  }

  // handleClick = (event) => {
  //   console.log("Clicked");
  //   this.setState({
  //     isToggleOn: !this.state.isToggleOn
  //   });
  // }
  // closeMenu = (event) => {
  //   if (navButton.classList.contains('active')) {
  //     navButton.classList.remove('active');
  //     navMenu.classList.remove('active');
  //   }
  // }

  // openMenu = (event) =>{

  //   navButton.classList.toggle('active');
  //   navMenu.classList.toggle('active');
  
  //   event.preventDefault();
  //   event.stopImmediatePropagation();
  // }

    clickingLogOut = (event) => {
      let newClicked = !this.props.clickedState
       if (newClicked) {
       localStorage.clear(this.props.token)
      }
      this.props.logOut()
    }

    render(){
      return(
    <div className="nav-thing" >
       <div className="all ">
                <div className="lefter">
                  <NavLink to="/" className="text">Home</NavLink>
                </div>
                <div className="left">
                  <NavLink to="/login" className="text">Login</NavLink>
                </div>
                  <div className="center">
                    <div className="explainer"></div>
                      <NavLink to="/register" className="text">Register</NavLink>   
                    </div>
                <div className="right">
                  <NavLink to="/profile" className="text">Profile</NavLink>
                </div>
                <div className="righter">
                  <NavLink to="/welcome/index" onClick={this.clickingLogOut} className="text">Log Out</NavLink>
                </div>
              
        </div> 
      {/*  </div> */}
    </div>
  )
}
};

export default NavBar;