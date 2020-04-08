import React, { Component } from 'react'
import JwtDecode from 'jwt-decode';

class BabbleCard extends Component {
    render() {
        let {text} = this.props.babble
        // console.log(this.props.babble.user_id);
        // let theUser = fetch('http://localhost:3000/api/v1/users')
        //     .then(res => res.json())
        //     .then((data) => {
        //         data.filter((userObj) => {
        //           console.log(userObj);
                  
        //         })
        //     })
        // console.log(JwtDecode(this.props.token));
        
        // let userInfo = JwtDecode(this.props.token)
        return (
            <div>
                <span  className="card horizontal"> 
                {text} <hr/>
                <button className="btn">comment</button>
                </span>
                
            </div>
        )
    }
}

export default BabbleCard
