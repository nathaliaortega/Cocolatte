import React, { Component } from 'react';

import '../styles/LandingSection.css';
import bienvenidos from '../resources/FondoTitulo.png';



const LandingSection = ({srcImage}) => {
    
    return(
        <div className="LandingSection" id="LandingSection">            
            <img src={srcImage} alt="Imagen de fondo" className="LandingSection__img"></img>
            <div className="landingSection__bienvenidos">
                <img className="landingSection__bienvenidos-img" alt="Imagen de fondo" src={bienvenidos} />
            </div>
        </div>
    );
    
}

export default LandingSection;