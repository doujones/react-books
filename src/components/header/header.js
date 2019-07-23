import React from "react"
import {Link} from "react-router-dom";

import "./header.scss"

const Header = () => (
  <div className="header">
    <div className="lastname-container">
    <h1 className="lastname">boswell</h1>
    </div>
    <div className="options">
      <Link className="option" to="/products">Purchases</Link>
      <Link className="option" to="/products">Contact</Link>
    </div>
  </div>
)
export default Header;