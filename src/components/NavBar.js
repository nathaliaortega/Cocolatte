
import React, { Component } from 'react';
import '../styles/NavBar.css';
import Logo from '../resources/logoBlanco-xs.png';
import {Link as LinkRoute, BrowserRouter as Router, Route } from 'react-router-dom';
import { Link} from "react-scroll";

import SinglePage from '../pages/SinglePage';
class NavBar extends Component {
  state = {
    className: 'nav-bar',
    classNameLinkIncio: 'nav-item__Link',
    classNameLinkHistory: 'nav-item__Link',
    classNameLinkContact: 'nav-item__Link',

  };

  listenScrollEvent = e => {
    if (window.scrollY > 180) {
      this.setState({ className: 'nav-bar nav-bar-color' });
      if (window.scrollY > 1000) {
        this.setState({ classNameLinkIncio: 'nav-item__Link' });
        this.setState({ classNameLinkHistory: 'nav-item__Link nav-item__Link-color' });
        this.setState({ classNameLinkContact: 'nav-item__Link' });
      }
      if (window.scrollY > 1480) {
        this.setState({ classNameLinkIncio: 'nav-item__Link' });
        this.setState({ classNameLinkContact: 'nav-item__Link nav-item__Link-color' });
        this.setState({ classNameLinkHistory: 'nav-item__Link' });
      }
    }
    else {
      this.setState({ className: 'nav-bar' });
      this.setState({ classNameLinkIncio: 'nav-item__Link nav-item__Link-color' });
      this.setState({ classNameLinkHistory: 'nav-item__Link' });
      this.setState({ classNameLinkContact: 'nav-item__Link' });
    }
  }

  componentDidMount() {
    const menuIcon = document.getElementById('menu-icon');
    const menuContent = document.getElementById('menu-content');
    const menuLink = document.getElementsByClassName('nav-item__Link');
    menuIcon.addEventListener('click', () => {
      menuContent.classList.toggle('active');
      for (var i = 0; i < menuLink.length; i++) {
        menuLink[i].classList.toggle('animated');
        menuLink[i].classList.toggle('fadeInUp');
      }
      menuIcon.classList.toggle('animated');
      menuIcon.classList.toggle('fadeInRight');
      menuIcon.classList.toggle('fa-times');
    });
    for (var i = 0; i < menuLink.length; i++) {
      menuLink[i].onclick = function () {
        menuContent.classList.remove('active');
        menuIcon.classList.remove('fa-times');
      }
    }


    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <Router>
         <nav className={this.state.className}>
        
          <LinkRoute to={"/inicio"}>
            <img src={Logo} alt="Logo" className="logo"></img>
          </LinkRoute>          
          
          <i className="fas fa-bars fa-2x" id="menu-icon"></i>
        
        <ul className='nav-item-cont' id="menu-content">
          <Link to="LandingSection" smooth={true} duration={250} className={this.state.classNameLinkIncio}>Inicio</Link>
          <Link to="historySection" smooth={true} duration={250} className={this.state.classNameLinkHistory}>Historia</Link>
          <Link to="historySection" smooth={true} duration={250} className="nav-item__Link">Productos</Link>
          <Link to="historySection" smooth={true} duration={250} className="nav-item__Link">Suscripciones</Link>
          <Link to="historySection" smooth={true} duration={250} className="nav-item__Link">Línea Institucional</Link>
          <Link to="ContactSection" smooth={true} duration={250} className={this.state.classNameLinkContact}>Contáctanos</Link>
        </ul>
      </nav>
        <Route exact path="/inicio" component={SinglePage} />
      </Router>
     
    );
  }
}



export default NavBar;