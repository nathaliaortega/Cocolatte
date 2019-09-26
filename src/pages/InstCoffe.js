
import React from 'react';
import DetailLanding from '../sections/DetailLanding'
import bolsas from '../resources/Institucional/BolsasCafe.jpeg'
import sirviendo from '../resources/Institucional/SirviendoRiendo.jpeg'
import LinaFiltros from '../resources/Institucional/LinaFiltros.jpeg'


function InstCoffe(){
   
    return(
        <>
         
            <DetailLanding mail="mailto:cocolattecafe@gmail.com?subject=Cotización%20café%20para%20empresas" title="Café Empresas" 
            firstSlide={bolsas} secondSlide={sirviendo} thirdSlide={LinaFiltros}
            titleFirstSlide="Calidad" descriptionFirst="Que todos en tu empresa disfruten un café
            de alta calidad y un muy buen sabor, café cosechado por pequeños caficultures." 
            titleSecondSlide="Rendidor"
            descriptionSecond="Un café que rinde más, te enseñamos cómo debes preprarlo para que ahorres y todos estemos satisfechos y felices. "
            titleThirdSlide="Buenos días" descriptionThird="En la oficina un buen día empieza con una buena taza de café,
            aumenta la productividad y estimula la concentración."/>

            
        </>
    );
    
}

export default InstCoffe;