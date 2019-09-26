import React, { Component } from "react";
import "../styles/NavBar.css";
import Logo from "../resources/logoBlanco-xs.png";
import { Link } from "react-scroll";
import { Link as LinkRoute, BrowserRouter as Router } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "nav-bar",
      classNameLinkIncio: "nav-item__Link",
      classNameLinkHistory: "nav-item__Link",
      classNameLinkSuscription: "nav-item__Link",
      classNameLinkInstitutional: "nav-item__Link",
      classNameLinkContact: "nav-item__Link"
    };
    this.mounted = false;
  }

  listenScrollEvent = e => {
    if (this.mounted) {
      console.log(window.scrollY);
      
      if (window.scrollY > 180) {
        this.setState({ className: "nav-bar nav-bar-color" });
        if (window.scrollY > 1500) {
          this.setState({ classNameLinkIncio: "nav-item__Link" });
          this.setState({
            classNameLinkHistory: "nav-item__Link nav-item__Link-color"
          });
          this.setState({ classNameLinkSuscription: "nav-item__Link" });
          this.setState({ classNameLinkInstitutional: "nav-item__Link" });
          this.setState({ classNameLinkContact: "nav-item__Link" });
        }
        if (window.scrollY > 1800) {
          this.setState({ classNameLinkIncio: "nav-item__Link" });
          this.setState({
            classNameLinkSuscription: "nav-item__Link nav-item__Link-color"
          });
          this.setState({ classNameLinkHistory: "nav-item__Link" });
          this.setState({ classNameLinkContact: "nav-item__Link" });
          this.setState({ classNameLinkInstitutional: "nav-item__Link" });
        }
        if (window.scrollY > 2600) {
          this.setState({ classNameLinkIncio: "nav-item__Link" });
          this.setState({
            classNameLinkInstitutional: "nav-item__Link nav-item__Link-color"
          });
          this.setState({ classNameLinkHistory: "nav-item__Link" });
          this.setState({ classNameLinkSuscription: "nav-item__Link" });
          this.setState({ classNameLinkContact: "nav-item__Link" });
        }
        if (window.scrollY > 3100) {
          this.setState({ classNameLinkIncio: "nav-item__Link" });
          this.setState({
            classNameLinkContact: "nav-item__Link nav-item__Link-color"
          });
          this.setState({ classNameLinkHistory: "nav-item__Link" });
          this.setState({ classNameLinkSuscription: "nav-item__Link" });
          this.setState({ classNameLinkInstitutional: "nav-item__Link" });
        }
      } else {
        this.setState({ className: "nav-bar" });
        this.setState({
          classNameLinkIncio: "nav-item__Link nav-item__Link-color"
        });
        this.setState({ classNameLinkHistory: "nav-item__Link" });
        this.setState({ classNameLinkContact: "nav-item__Link" });
        this.setState({ classNameLinkSuscription: "nav-item__Link" });
        this.setState({ classNameLinkInstitutional: "nav-item__Link" });
      }
    }
  };

  componentDidMount() {
    this.mounted = true;
    const menuIcon = document.getElementById("menu-icon");
    const menuContent = document.getElementById("menu-content");
    const menuLink = document.getElementsByClassName("nav-item__Link");
    menuIcon.addEventListener("click", () => {
      menuContent.classList.toggle("active");
      for (var i = 0; i < menuLink.length; i++) {
        menuLink[i].classList.toggle("animated");
        menuLink[i].classList.toggle("fadeInUp");
      }
      menuIcon.classList.toggle("animated");
      menuIcon.classList.toggle("fadeInRight");
      menuIcon.classList.toggle("fa-times");
    });
    for (var i = 0; i < menuLink.length; i++) {
      menuLink[i].onclick = function() {
        menuContent.classList.remove("active");
        menuIcon.classList.remove("fa-times");
      };
    }

    window.addEventListener("scroll", this.listenScrollEvent);
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { institutional } = this.props;
    let menu;
    if (institutional === "true") {
    } else {
      menu = (
        <ul className="nav-item-cont" id="menu-content">
          <Link
            to="LandingSection"
            smooth={true}
            duration={250}
            className={this.state.classNameLinkIncio}
          >
            Inicio
          </Link>
          <Link
            to="historySection"
            smooth={true}
            duration={250}
            className={this.state.classNameLinkHistory}
          >
            Nosotros
          </Link>
          <Link
            to="historySection"
            smooth={true}
            duration={250}
            className="nav-item__Link"
          >
            Productos
          </Link>
          <Link
            to="suscriptionSection"
            smooth={true}
            duration={250}
            className={this.state.classNameLinkSuscription}
          >
            Suscripciones
          </Link>
          <Link
            to="instituionalSection"
            smooth={true}
            duration={250}
            className={this.state.classNameLinkInstitutional}
          >
            Línea Institucional
          </Link>
          <Link
            to="ContactSection"
            smooth={true}
            duration={250}
            className={this.state.classNameLinkContact}
          >
            Contáctanos
          </Link>
        </ul>
      );
    }
    return (
      <Router>
        <nav className={this.state.className} >
          <LinkRoute to={"/inicio"} onClick={ refreshPage }>
            <img src={Logo} alt="Logo" className="logo"></img>
          </LinkRoute>

          <i className="fas fa-bars fa-2x" id="menu-icon"></i>
          {menu}
        </nav>
      </Router>
    );
  }
}
function refreshPage(){ 
  window.location.reload(); 
}

export default NavBar;
