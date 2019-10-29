
import React from 'react';
import '../styles/SinglePage.css';
import LandingSection from '../sections/LandingSection';
import FeatureSection from '../sections/FeatureSection';
import Background from '../resources/Foto 14.jpg'
import HistorySection from '../sections/HistorySection';
import ContactSection from '../sections/ContactSection';
import SuscriptionSection from '../sections/SuscriptionSection';
import InstitutionalSection from '../sections/InstitutionalSection';
import ProductsSection from '../sections/ProductsSection';
import CoffeBack from '../resources/coffeeGrain-Blur.jpg'
import '../resources/fontawesome-free-5.9.0-web/css/all.min.css'
import NavBar from '../components/NavBar'
function SinglePage(){
   
    return(
        <>           
            <NavBar institutional="false"/>
            <LandingSection srcImage={Background}/>
            <FeatureSection/>
            <HistorySection srcImage={CoffeBack}/>
            <ProductsSection/>
            <SuscriptionSection/>
            <InstitutionalSection/>
            <ContactSection/>
            
        </>
    );
    
}

export default SinglePage;