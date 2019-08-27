
import React, { Component } from 'react';
import '../styles/NavBar.css';
import Logo from '../resources/logoBlanco-xs.png';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import HistorySection from '../sections/HistorySection';
class NavBar extends Component {
    state = {
        className: 'nav-bar',
      };
    
      listenScrollEvent = e => {
        if (window.scrollY > 180) {
          this.setState({className: 'nav-bar color'})
        } else {
          this.setState({className: 'nav-bar'})
        }
      }
    
      componentDidMount() {
        const menuIcon = document.getElementById('menu-icon');
        const menuContent = document.getElementById('menu-content');
        menuIcon.addEventListener('click', () => {
            menuContent.classList.toggle('active');
        });
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    
    render() {
        return (
            <nav className={this.state.className}>
                <div className="logo-container">
                    
                    <img src={Logo} alt="Logo" className="logo"></img>
                    <i className="fas fa-bars fa-2x" id="menu-icon"></i>
                </div>
                <ul className='nav-item-cont' id="menu-content">
                    <Link to="LandingSection" className="nav-item__Link">Inicio</Link>
                    <Link to="historySection" className="nav-item__Link">Historia</Link>
                    <Link to="historySection" className="nav-item__Link">Productos</Link>           
                    <Link to="historySection" className="nav-item__Link">Suscripciones</Link>           
                    <Link to="historySection" className="nav-item__Link">Línea Institucional</Link>           
                    <Link to="ContactSection" className="nav-item__Link">Contáctanos</Link>           
                </ul>
           </nav>
        );
    }
}



export default NavBar;