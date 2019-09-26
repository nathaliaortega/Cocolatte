import React, { Component } from "react";
import "../styles/NavBarDetail.css";
import Logo from "../resources/logoCafeT-xs.png";
import { Link as LinkRoute, BrowserRouter as Router } from "react-router-dom";
class NavBarDetail extends Component {
  

  render() {
    
    return (
        <nav className="nav-bar-detail">
          <LinkRoute to={"/inicio"}>
            <img src={Logo} alt="Logo" className="detail-logo"></img>
          </LinkRoute>
          
        </nav>
    );
  }
}


export default NavBarDetail;

