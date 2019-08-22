import React, { Component } from 'react';
import '../styles/SinglePage.css';
import LandingSection from '../sections/LandingSection';
import FeatureSection from '../sections/FeatureSection';
import Background from '../resources/FondoTmp.JPG'
import CoffeBack from '../resources/coffeeGrain.jpg'
import '../resources/fontawesome-free-5.9.0-web/css/all.min.css'
function SinglePage(){
   
    return(
        <>
            <LandingSection srcImage={Background}/>
            <FeatureSection/>
            <LandingSection srcImage={CoffeBack}/>
        </>
    );
    
}

export default SinglePage;