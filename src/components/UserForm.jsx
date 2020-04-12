import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
      <div className="row">
        <div className="col s12 l4 offset-14">
          <div className="card z-depth-4">
            <div className="card-action red accent-1 white-text">
                  <h4>{formName}</h4>
              </div>
              <div className="card-content">
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="username">Username:</label>
                  <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
                  <label htmlFor="password">Password:</label>
                  <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
                  <input className="btn red accent-1" type="submit" value="Submit"/>
                </form>
                
              </div>
            </div>
          </div>
      </div>
    );
  }

}

export default Form;