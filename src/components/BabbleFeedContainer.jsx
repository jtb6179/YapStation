import React, { Component, Fragment } from 'react'
import BabbleCard from "./BabbleCard"
import CommentContainer  from "./commentsFolder/CommentsContainer";

class BabbleFeedContainer extends Component {
    state = {
        comments: [],
        clickedDiv: false
    }

    componentDidMount(){
        fetch("http://localhost:3000/comments")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    comments: data
                })
            })
        }

        addAllTheCommentsToThePost = (comObj) => {
            fetch("http://localhost:3000/comments", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
                  "Authorization": `Bearer ${this.props.token}`
              }, body: JSON.stringify(comObj)
          })
            .then(res => res.json())
            .then((com) => {
                console.log(com);
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
        

    handleClickedDiv = (event) => {
        console.log(event.target);
        
        this.setState({
            clickedDiv: !this.state.clickedDiv
        })
    }
    

    render() {
        let theFeed = this.props.babbles.map((oneBab) => {
            return <BabbleCard key={oneBab.id} babble={oneBab} token={this.props.token}  
                                            //  comments={this.props.userInstance} 
                                            //  babble_likes={this.props.userInstance.babble_likes}
                                             />
        })
        return (
            <div onClick={this.handleClickedDiv} >
                {theFeed}
                { this.state.clickedDiv ?  
                <div className="row">
                    <div className="offset-s6">
                        <CommentContainer  comments={this.state.comments} 
                        addCom={this.addAllTheCommentsToThePost} />
                    </div>
                </div>
                         : 
                         null
                         }
                </div>   
        )
    }
}

export default BabbleFeedContainer
