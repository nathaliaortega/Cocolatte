
import React from 'react';
import DetailLanding from '../sections/DetailLanding'
import fila from '../resources/Institucional/fila.jpeg'
import comida from '../resources/Institucional/Comida.jpeg'
import servir from '../resources/Institucional/Servir.jpeg'
import NavBarDetail from '../components/NavBarDetail'


function CateringPage(){
   
    return(
        <>
            <NavBarDetail/>
            <DetailLanding mail="mailto:cocolattecafe@gmail.com?subject=Cotización%20Catering" title="Catering" firstSlide={servir} secondSlide={comida} thirdSlide={fila}
            titleFirstSlide="Calidad-Precio" descriptionFirst="Nos acomodamos a tu 
            presupuesto, siempre garantizando la mejor calidad." titleSecondSlide="Puntualidad"
            descriptionSecond="Sabemos que en tus eventos quieres que todo salga perfecto, por
            eso nos compromentemos contigo a entregarte todo a tiempo y justo como lo pediste. "
            titleThirdSlide="Excelente Servicio" descriptionThird="Atendemos tus eventos con el mejor 
            servicio, asegurandonos que todos disfruten de nuestro servicio de catering."/>

            
        </>
    );
    
}

export default CateringPage;