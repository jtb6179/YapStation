import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import BabbleFeedContainer from './BabbleFeedContainer'
import "materialize-css/dist/css/materialize.min.css";
import Modal from "./Modal";



class ProfileContainer extends Component {

    // state = {
    //     user: []
    // }

    componentDidMount() {
        if(!this.props.token){
          this.props.history.push("/login")
        }
    //    fetch("http://localhost:3000/api/v1/users")
    //     .then(res => res.json())
    //     .then((data) =>{
    //         this.setState({
    //             user: data
    //         })
    //     })
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
                if (bab.id && babbleObj !== "") {
                    this.props.addOneBabble(bab)
                  } else {
                    console.log("BABBLE FAILED. YOU SUCK AT LOGGING IN");
                    alert("Sorry, I ain't saving no Empty post. Gtfo of here")
                  }
            })
      }

    render() {
        
        let {user:{bio, profile_name, age, username, location, education_status}} = this.props

        return (
            <div className="row">
                <div className="col s5">
                    <h2>{username}&apos;s Profile</h2>
                    <h3>Profile Name: {profile_name}</h3>
                        <p>Bio: {bio}</p>
                        <p>Age: {age}</p>
                        <p>location: {location}</p>
                        <p>Education: {education_status}</p>
                    </div>
                    <div className="col s3">
                        <Modal  username={profile_name} 
                                    handleSubmit={this.handlingModalSubmit}  
                                        token={this.props.token}
                                    />
                        <BabbleFeedContainer  babbles={this.props.babbles}
                                                            token={this.props.token} />
                    </div>
            </div>
        )
    }
}

export default withRouter(ProfileContainer)
