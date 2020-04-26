import React, { Component } from 'react'
import { Row, Col, Card, Icon, CardPanel } from 'react-materialize'

 class CommentsContainer extends Component {

    state = {
        text: "",
        allComments: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/comments')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    allComments: data
                })
            })
    }

    // findAllTheSpecificCommentsForPost = (comObj) => {
    //     // let TheNode =  document.getElementById()
    //     // console.log(TheNode);
    //     let theNewInstance = this.state.allComments.filter((comInstance) => {
    //         console.log(comInstance);
    //         return comInstance.id === this.props.idOfElement
    //     })
    //     console.log(theNewInstance);
        
    //     // return theNewInstance.text
    // }

     handleGrabbingTheID = () =>{
        let theSpecificObject = this.props.babbles.filter((post) => {
            return post.includes(this.props.idOfElement)
        })
        this.props.ReceiveComment(theSpecificObject.id)
     }

     handleChange = (event) => {
        event.preventDefault()
        // console.log(event.target.value);
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
        console.log(this.props.babb);
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    width: 30
                }}
            />
        );
        let comText = this.props.babb.comments.map((com) => {
            return <span className="card">
                            <ul>{com.text}</ul>
                        </span>
        })
        
        return (
            <div>
                {/* <div className="card">
                        <div>{this.props.babb.text}</div>
                </div>
                    <div className="card-action">
                        <div className="card-content">
                           {comText}
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="text"  id="textarea1" className="materialize-textarea" 
                                    onChange={this.handleChange} 
                                    value={this.state.text} 
                                    />
                            <button type="submit"  className=" waves-effect btn-small" >Post your comment</button>
                        </form>
                    </div> */}

                    <Row>
                    <Col
                        m={10}
                        s={12}
                                    >
                        <Card
                        // actions={[
                        //     <a key="1" href="#">This is a link</a>,
                        //     <a key="2" href="#">This is a link</a>
                        // ]}
                        className="red darken-2"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        >
                    <div> 
                        <div>
                            <div>{this.props.babb.text}</div>
                        </div>
                            <CardPanel className="red">
                                <span className="white-text">
                                    <div>
                                        {comText}
                                            <ColoredLine color="red" />
                                    </div>
                                </span>
                            </CardPanel>
                        <div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="text"  id="textarea1" className="materialize-textarea" 
                                    onChange={this.handleChange} 
                                    value={this.state.text} 
                                    />
                            <button type="submit"  className=" waves-effect btn-small" >Post your comment</button>
                            </form>
                        </div>
                    </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommentsContainer
