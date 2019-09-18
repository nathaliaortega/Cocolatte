import React, { Component } from "react";
import "../styles/NavBar.css";
import Logo from "../resources/logoCafeT-xs.png";
import {
  Link as LinkRoute,
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import SinglePage from "../pages/SinglePage";
class NavBar extends Component {
  render() {
    return (
      <Router>
        <nav className="nav-bar-detail">
          <LinkRoute to={"/inicio"} onClick={refreshPage}>
            <img src={Logo} alt="Logo" className="logo"></img>
          </LinkRoute>
        </nav>
        <Route exact path="/inicio" component={SinglePage} />
      </Router>
    );
  }
}
function refreshPage() {
  window.location.reload();
}

export default NavBar;
