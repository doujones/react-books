import React from 'react'
import SignIn from "../signin/signin"

import "./signin.scss";

class signin extends React.Component
{constructor(props){
  super(props);

  this.state = {
    email: '',
    password: ''
  }
}

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
    
   
  }

render(){
  return(
    <div className="sign-in">
    <h2>Do you have an account</h2>
    <span>Sign in with your email and password</span>
    
    <form onSubmit={this.handleSubmit}>
    <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required />
    <label>Email</label>
    <input 
    name="password" 
    type="password" 
    value={this.state.email} 
    onChange={this.handleChange}
    required 
    />
    <label>Password</label>

    <input type="submit" value="Submit Form"/>
    </form>
    </div>
  )
}
}

export default signin 