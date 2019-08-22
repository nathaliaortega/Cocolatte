import React, { Component } from 'react';
import '../styles/SinglePage.css';
import DescriptionContainer from '../containers/DescriptionContainer';
import award from '../resources/award.png';
import colombia from '../resources/colombia.png';
import coffeecup from '../resources/coffee-cup.png';
class FeatureSection extends Component{
    render()
    {
        return(
            <div className="featureSection">
                <p className="feature__title"><b>Aquí tomas un mejor café</b></p>
                <p className="feature__description">Ofrecemos café <b>colombiano</b> de distintos matices y sabores, café de pequeños productores, café con sueños, con esfuerzo y una calidad increíble. Café de corazón.</p>
                <div className="card-container">
                    <DescriptionContainer srcImage={award} title="Calidad Garantizada"/>
                    <DescriptionContainer srcImage={colombia} title="100% Colombiano"/>
                    <DescriptionContainer srcImage={coffeecup} title="Café Fresco, del grano a la taza"/>

                </div>
                
            </div>
        );
    }
}

export default FeatureSection;