import React from "react"
import { Route } from 'react-router-dom'
import Home from '../Home'


class AppWrapper extends React.Component{
  render(){
    console.log(this.props.user);
    
  if(this.props.token === ""){
    this.props.history.push("/welcome/index") 
  }
   return(
     <div>
       <Route path='/' component={Home} />
     </div>
   );
  }
}
export default AppWrapper