import React, { Component } from 'react'

 class CommentsContainer extends Component {

    state = {
        text: ""
    }

     handleGrabbingTheID = () =>{
        let theSpecificObject = this.props.babbles.filter((post) => {
            return post.includes(this.props.idOfElement)
        })
        this.props.ReceiveComment(theSpecificObject.id)
     }

     handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        let {name, value} = event.target
        this.setState({
          [name]: value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCom(this.state)
        this.setState({
            text: ""
        })
      }
    render() {
        console.log(this.props.idOfElement);
        //This is not How you do this. Figure out how to get the specific post. 
        //as Post are created. they are passed in as an array. you must find the 
        //Specific post in that list and when you click on it. it grabs the correct
        //One and shows it. 
    //     let anArray = this.props.receiveBabbleObj(this.props.babb)
    //    console.log(anArray);
       let theShitYouClicked = document.getElementById(this.props.idOfElement)
       console.log(theShitYouClicked.innerText);
        
        return (
            <div>
                <div className="card">
                        <span>{theShitYouClicked.innerText}</span>
                </div>
                    <div className="card-action">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="text"  id="textarea1" className="materialize-textarea" 
                                    onChange={this.handleChange} 
                                    value={this.state.text} 
                                    />
                            <button type="submit"  className=" waves-effect btn-small" >Post your Babble</button>
                        </form>
                    </div>
            </div>
        )
    }
}

export default CommentsContainer