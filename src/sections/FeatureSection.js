import React, { Component } from 'react';
import '../styles/FeatureSection.css';
import DescriptionContainer from '../containers/DescriptionContainer';
import award from '../resources/award.png';
import colombia from '../resources/colombia.png';
import coffeecup from '../resources/coffee-cup.png';
import variety from '../resources/credit.png';

class FeatureSection extends Component{
    render()
    {
        return(
            <div className="featureSection">
                <p className="feature__title"><b>Aquí tomas un mejor café</b></p>
                <p className="feature__description">Preparaciones de bebidas especializadas a base de café de origen 100% <b>Colombiano</b>, Ofrecemos otras  líneas de negocio como la comercialización del Café en grano y molido bajo la marca propia (Cocolatte), 
                comercialización de métodos y accesorios para las preparaciones (Venta directa y Línea Institucional). Portafolio de  asesorías, entrenamientos y capacitaciones. 
                </p>
                <div className="card-container">
                    <DescriptionContainer srcImage={award} title="Calidad Garantizada"/>
                    <DescriptionContainer srcImage={colombia} title="100% Colombiano"/>
                    <DescriptionContainer srcImage={coffeecup} title="Café Fresco, del grano a la taza"/>
                    <DescriptionContainer srcImage={variety} title="Variedad"/>
                </div>
                
            </div>
        );
    }
}

export default FeatureSection;