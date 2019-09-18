
import React from 'react';
import NavBarDetail from '../components/NavBarDetail'
import DetailLanding from '../sections/DetailLanding'
function CateringPage(){
   
    return(
        <>
            <NavBarDetail/>
            <DetailLanding title="Catering" firstSlide="" secondSlide="" thirdSlide=""
            titleFirstSlide="Calidad-Precio" descriptionFirst="Nos acomodamos a tu 
            presupuesto, siempre garantizando la mejor calidad" titleSecondSlide="Puntualidad"
            descriptionSecond="Sabemos que en tus eventos quieres que todo salga perfecto, por
            eso nos compromentemos contigo a entregarte todo a tiempo y justo como lo pediste. "
            titleThirdSlide="Excelente Servicio" descriptionThird="Atendemos tus eventos con el mejor 
            servicio, asegurandonos que todos disfruten de nuestro servicio de catering."/>

            
        </>
    );
    
}

export default CateringPage;