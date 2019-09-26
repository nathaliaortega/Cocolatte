import React from 'react';

import '../styles/LandingSection.css';
import bienvenidos from '../resources/FondoTitulo.png';



const LandingSection = ({srcImage}) => {
    
    return(
        <div className="LandingSection" id="LandingSection">            
            <div className="landingSection__bienvenidos">
                <img className="landingSection__bienvenidos-img" alt="Imagen de fondo" src={bienvenidos} />
            </div>
        </div>
    );
    
}

export default LandingSection;