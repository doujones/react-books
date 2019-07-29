import React from "react";
import signin from "../sign-in/Sign-in"
import "./Sign-in.scss"
import SignUp from "../sign-up/sign-up"

const SignIn = () => (
  <div className="sign-in-and-sign-up">
  <signin />
  <SignUp/>
  </div>
)

export default SignIn;