import React, { Component } from 'react';
import Background from '../resources/FondoTmp.JPG';
import '../styles/SinglePage.css';


const LandingSection = ({srcImage}) => {
    
    return(
        <div className="LandingSection">
            
            <img src={srcImage} className="LandingSection__img"></img>
        </div>
    );
    
}

export default LandingSection;