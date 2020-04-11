import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {

    state = {
      text: ""
    }

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
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
    this.props.handleSubmit(this.state)
  }

  render() {
    // let {text} = this.props.text
    // console.log(this.state.text);
    return (
      <div>
        <button
          className="button-thing z-depth-3 modal-trigger"
          data-target="modal1"
        >
          What are you gonna 
          Blab about?
        </button>

        <div ref={ Modal => { this.Modal = Modal;}} id="modal1" className="modal">
          <div className="modal-content">
            <h5>{this.props.username}&apos;s Babble</h5>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" name="text"  id="textarea1" className="materialize-textarea" 
                              onChange={this.handleChange} 
                              value={this.state.text} 
                              />
                <div className="modal-footer">
                  <button className="modal-close waves-effect waves-red btn-flat">close</button>
                  <button type="submit"  className="modal-close waves-effect waves-red btn-flat" >Post your Babble</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;