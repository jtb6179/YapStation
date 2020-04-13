import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import BabbleFeedContainer from './BabbleFeedContainer'
import "materialize-css/dist/css/materialize.min.css";
import Modal from "./Modal";
import CommentContainer  from "./commentsFolder/CommentsContainer";
import WeatherApp from "./commentsFolder/WeatherContainer"


class ProfileContainer extends Component {

    state = {
        babble: [],
        comments: [],
        idOfElement: "",
        clickedDiv: false
    }

    componentDidMount() {
        if(!this.props.token){
          this.props.history.push("/login")
        }
        fetch("http://localhost:3000/comments")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    comments: data
                })
            })
      }  

      ReceiveComment = (comObject) => {
          console.log(comObject);
        this.setState({
            idOfElement: comObject
        })
      }

            receiveBabbleObj = (comObject) => {
                console.log(comObject);
                            this.setState({
                                babble: comObject
                            })
                }
      
    handleClickedDiv = (event) => {
        console.log(event.target.id);
        this.setState({
            clickedDiv: !this.state.clickedDiv
        })
        this.setState({
            idOfElement: event.target.id
        })
        this.receiveBabbleObj()
    }

      addAllTheCommentsToThePost = (comObj) => {
          comObj.babble_id = this.state.idOfElement
        fetch("http://localhost:3000/comments", {
          method: "POST",
          headers: {
              "content-type": "application/json",
              "Authorization": `Bearer ${this.props.token}`
          }, body: JSON.stringify(comObj)
      })
        .then(res => res.json())
        .then((com) => {
            // console.log(com);
            if (com.id && comObj !== "") {
                this.setState({
                    comments: [...this.state.comments, comObj]
                })
              } else {
                console.log("Comment FAILED. YOU SUCK AT LOGGING IN");
                alert("Sorry, I ain't saving no Empty comment. GTFO of here")
              }
        })
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
                // console.log(bab);
                if (bab.id && babbleObj !== "") {
                    this.props.addOneBabble(bab)
                  } else {
                    console.log("BABBLE FAILED. YOU SUCK AT LOGGING IN");
                    alert("Sorry, I ain't saving no Empty post. Gtfo of here")
                  }
            })
      }
      

    render() {
        // console.log(this.state.babble);
        
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    width: 30
                }}
            />
        );
        let {user:{bio, profile_name, age, username, location, education_status}} = this.props

        return (
            <div className="row">
                <div className="col s3">
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
                            <div onClick={this.handleClickedDiv}>
                                <BabbleFeedContainer  babbles={this.props.babbles}
                                                                    token={this.props.token} ReceiveComment={this.ReceiveComment} />
                            </div>
                    </div>
                    <div className="col s4">
                        <div  className="card horizontal z-depth-3"> 
                        { this.state.clickedDiv ?  
                            <div>
                                <CommentContainer  babbles={this.props.babbles} ReceiveComment={this.props.ReceiveComment} 
                                                                    babb={this.state.babble}
                                                                    idOfElement={this.state.idOfElement} 
                                                                    comments={this.state.comments} 
                                                                    addCom={this.addAllTheCommentsToThePost} 
                                                                    receiveBabbleObj={this.receiveBabbleObj} 
                                                                    />
                            </div>
                            : 
                                null
                             }
                        </div>
                            <ColoredLine color="red" />
                        <div  className="card horizontal z-depth-3">
                            <WeatherApp />
                        </div>
                    </div>
            </div>
        )
    }
}

export default withRouter(ProfileContainer)
