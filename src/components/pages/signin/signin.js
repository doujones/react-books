import React from 'react'
import FormInput from "../../forms/input"
import "./signin.scss";
import Button from "../../button/button"
import  { auth, signInWithGoogle } from "../../../fb/firebase.utils"

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

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.setState
    
   try {
     await auth.signInWithEmailAndPassword(email, password);
     this.setState({email: '', password: ''});
   } catch(error){
     console.log(error);
   }
  }

render(){
  return(
    <div className="sign-in">
    <h2 className="h2-class">Do you have an account</h2>
    <span>Sign in with your email and password</span>
    
    <form onSubmit={this.handleSubmit}>
    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required />
    <FormInput 
    name="password" 
    type="password" 
    label="password"
    value={this.state.password} 
    handleChange={this.handleChange}
    required 
    />
    <div className="buttons">
    <Button type="submit"> Signin</Button>
    <Button onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</Button>
    </div>
    </form>
    </div>
  )
}
}

export default signin 