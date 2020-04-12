import React, { Component } from 'react';
import Select from 'react-select'

class RegisterForm extends Component {

  state = {
      // choice: "Select one of the options",
      username: "",
      profile_name:"",
      bio: "",
      age: 0,
      location: "",
      education_status: ""
  }

  handleSelectChange = (selectedOption) => {
    this.setState({ 
      education_status: selectedOption 
    });
    // console.log(`Option selected:`, selectedOption);
  };

  
  handleChange = (event) => {
    event.preventDefault()
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
    let {formName} = this.props
    // let {choice} = this.state
    let { username, password, profile_name, bio, age, location, education_status } = this.state
    // console.log(this.state);
    // console.log(value);
    
    const options = [
      { value: 'Some high School', label: 'some_highSchool' },
      { value: 'GED', label: 'GED/High School Diploma' },
      { value: 'some_university', label: 'Some College' },
      { value: 'Associates', label: 'Associates' },
      { value: "Bachelor's", label: "Bachelor's Degree" },
      { value: "Master's Degree", label: "Master's Degree" },
      { value: "Doctorate Degree", label: "Doctorate Degree" }
    ]
    return (
        <div>
        Create your New Account & profile
          <div className="container z-depth-4">
            <div className="card">
                <div className="card-content ">
              <div className="card-action red accent-1 white-text">
                <h1>{formName}</h1>
                </div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
                <label htmlFor="profile name">Profile_name:</label>
                <input type="text" autoComplete="off" name="profile_name" value={profile_name} onChange={this.handleChange}/>
                <label htmlFor="bio">Bio:</label>
                <input type="text" className="materialize-textarea" autoComplete="off" name="bio" value={bio} onChange={this.handleChange}/><br/>
                <label htmlFor="age">Age:</label>
                <input type="number" autoComplete="off" name="age" value={age} onChange={this.handleChange}/>
                <label htmlFor="location">Location:</label>
                <input type="text" autoComplete="off" name="location" value={location} onChange={this.handleChange}/>    
                <label> Education Status
                  <Select
                      value={education_status}
                      onChange={this.handleSelectChange}
                      options={options}
                  />
                </label><br/>       
                <input className="btn red accent-1" type="submit" value="Submit"/>
              </form>
                </div>
            </div>
          </div>
      </div>
    );
  }

}

export default RegisterForm;