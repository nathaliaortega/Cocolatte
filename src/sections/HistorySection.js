import React, { Component } from 'react';
import '../styles/HistorySection.css';
import bienvenidos from '../resources/FondoBienvenidos.png';
import Carousel from 'react-bootstrap/Carousel';
import DescriptionContainer from '../containers/DescriptionContainer';
import instagram from '../resources/instagram.png';
import wpp from '../resources/wpp.png';

const HistorySection = ({ srcImage }) => {

    return (
        <div className="HistorySection" id="historySection">
            <img src={srcImage} className="HistorySection__img"></img>
            <p className="history__title"><b>Nuestra Historia</b></p>
            <Carousel className="history__carousel">
                <Carousel.Item>
                    <div className="history__card-container">
                        <div>
                            <h3>Misión</h3>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="history__card-container">
                        <div>
                            <h3>Misión</h3>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="history__card-container">
                        <div>
                            <h3>Misión</h3>
                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );

}

export default HistorySection;