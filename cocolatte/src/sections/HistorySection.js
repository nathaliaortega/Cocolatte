import React, { Component } from 'react';

import '../styles/HistorySection.css';
import bienvenidos from '../resources/FondoBienvenidos.png';



const HistorySection = ({ srcImage }) => {

    return (
        <div className="HistorySection">
            <img src={srcImage} className="HistorySection__img"></img>
            <p className="history__title"><b>Nuestra Historia</b></p>
            
        </div>
    );

}

export default HistorySection;