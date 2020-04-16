import React, { Component } from 'react'
import "./searchBox.css"
// import Form from './UserForm'

export class SearchBox extends Component {

    gettingAllTheUsersSearch = (event) => {
        this.props.changeSearchTerm(event.target.value)
      }

    render() {
        console.log(this.props.user);
        
        return (
            <div>
                <div className="searchUsers-box container">
                    <p>Search for Friends in your Area</p>
                    <form>
                        <input className="search-txt" type="text" placeholder="       Search . . ."  value={this.props.searchTerm}
                                onChange={this.handleChange} />
                    </form>
                <div>
                </div>
            </div>
            </div>
        )
    }
}

export default SearchBox
