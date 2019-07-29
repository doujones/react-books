import React from "react";
import Button from "../button/button"
import FormInput from "../forms/input"
import "./sign-up.scss"
import { auth, createUserProfileDocument } from "../../fb/firebase.utils";
class SignUp extends React.Component {
  constructor(){
    super()

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword){
      alert("Incorrect Password")
      return;
    }

    try{
      const {user} = await auth.createUserWithEmailandPassword(email,password);
     await createUserProfileDocument(user, {displayName});

     this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
     })
    } catch(error){
     console.error(error);
    };
  }
    handleChange = event => {
      const {name, value} = event.target;

      this.setState({[name]: value});
    }
  
  render(){
    const {displayName, email, password, confirmPassword} = this.state
    return(
      <div className="sign-up">
      <h2 className="title">Create an Account</h2>
      <span>Create Account with email and password</span>
      <form className="sign-up" onSubmit={this.handleSubmit}>
      <FormInput
      type= "text"
      name="displayName"
      value={displayName}
      onChange={this.handleChange}
      label="Display Name"
      required
     />
      <FormInput
      type= "email"
      name="email"
      value={email}
      onChange={this.handleChange}
      label="Email"
      required
      />
      <FormInput
      type= "password"
      name="password"
      value={password}
      onChange={this.handleChange}
      label="password"
      required
      />
      <FormInput
      type= "confirmPassword"
      name="confirmPassword"
      value={confirmPassword}
      onChange={this.handleChange}
      label="confirmPassword"
      required
      />
      <Button type="submit">Sign Up</Button>
      </form>
      </div>
    )
  }
}

export default SignUp;