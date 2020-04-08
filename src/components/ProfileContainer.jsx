import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import BabbleFeedContainer from './BabbleFeedContainer'
import "materialize-css/dist/css/materialize.min.css";
import Modal from "./Modal";


class ProfileContainer extends Component {

    componentDidMount() {
        if(!this.props.token){
          this.props.history.push("/login")
        }
      }  

      handlingModalSubmit = (babbleObj) => {

          fetch("http://localhost:3000/babbles", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
                  "Authorization": `Bearer ${this.props.token}`
              }, body: JSON.stringify(babbleObj)
          })
            .then(res => res.json())
            .then((bab) => {
                console.log(bab);
                if (bab.id) {
                    this.props.addOneBabble(bab)
                  } else {
                    console.log("SNACK FAILED. YOU SUCK AT LOGGING IN");
                  }
            })
      }

    render() {
        let {user:{bio, profile_name, age, username, location, education_status}} = this.props
        // console.log(this.state.user.username);
        
        return (
            <div>
                <div style={{float: "left", paddingLeft: 10}}>
                    <h2>{username}&apos;s Profile</h2>
                    <h3>Profile Name: {profile_name}</h3>
                        <p>Bio: {bio}</p>
                        <p>Age: {age}</p>
                        <p>location: {location}</p>
                        <p>Education: {education_status}</p>
                    </div>
                    <Modal  username={profile_name} 
                                   handleSubmit={this.handlingModalSubmit}  
                                    token={this.props.token}
                                   />
                    <BabbleFeedContainer style={{float: 'right', paddingRight: 10 }} babbles={this.props.babbles}
                                                          token={this.props.token} />
            </div>
        )
    }
}

export default withRouter(ProfileContainer)
