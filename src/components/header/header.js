import React from "react"
import {Link} from "react-router-dom";
import { auth } from "../../fb/firebase.utils"
import "./header.scss"

const Header = ({currentUser}) => (
  <div className="header">
    <div className="lastname-container">
    <h1 className="lastname">boswell</h1>
    </div>
    <div className="options">
      <Link className="option" to="/products">Purchases</Link>
      <Link className="option" to="/products">Contact</Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}> Sign Out </div>
        :
        <Link className="option" to="/signin"> Sign In</Link>
      }
      </div>
  </div>
)
export default Header;