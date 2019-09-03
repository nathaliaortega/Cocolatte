
import React from 'react';
import '../styles/HistorySection.css';
import Carousel from 'react-bootstrap/Carousel'


const HistorySection = ({ srcImage }) => {

    return (
        <div className="HistorySection" id="historySection">

            
            <Carousel className="history__carousel">
                <Carousel.Item className="history__carousel-item">

                    <h2 className="history__title">Coco</h2>
                    <p>
                        Significa la pureza espiritual que hay dentro de cada ser humano. Lo áspero y duro de su corteza representa el egoísmo y vanidad que tiene todo ser humano, y lo cual es transformado por el agua que tiene este fruto, que siempre será, por naturaleza, fresca y limpia.
                    </p>
                </Carousel.Item>
                <Carousel.Item className="history__carousel-item">

                    <h2 className="history__title">Latte</h2>
                    <p>
                    Es el nombre común de una bebida que muestra las capas de un espresso y leche cremada que se mezclan y se remata con una ligera capa de espuma. Esta bebida es más cremosa y el sabor del café es más sutil.
                    </p>
                </Carousel.Item>
                <Carousel.Item className="history__carousel-item">



                    <h2 className="history__title">¿Quiénes Somos?</h2>
                    <p>Cocolatte es una marca comercializadora de productos a base de café, contamos con diferentes líneas de mercado y  ofrecemos servicios que permiten a nuestros clientes solucionar de una forma personalizada sus  necesidades.
                        
                    </p>



                </Carousel.Item>
                <Carousel.Item className="history__carousel-item">



                    <h2 className="history__title">¿Quiénes Somos?</h2>
                    <p>
                        Con 4 años de operación certificamos nuestra calidad y experiencia.
                        Invertimos solo en pequeños caficultores y los acompañamos en el  desarrollo de sus procesos productivos.
                    </p>



                </Carousel.Item>
                <Carousel.Item className="history__carousel-item">


                    <h2 className="history__title">Misión</h2>
                    <p>Conectar a los pequeños caficultores con el consumidor final, inspirando momentos de tranquilidad , felicidad  y ofreciendo una experiencia sensorial alrededor de las preparaciones
                        a base de café de origen y otras bebidas especiales.
                    </p>

                </Carousel.Item>
                <Carousel.Item className="history__carousel-item">



                    <h2 className="history__title">Visión</h2>
                    <p>En el 2025 ser reconocidos como una de las mejores empresas Colombianas llevando a cabo un control y
                         mejoramiento continuo de la marca, desde el  desarrollo de los procesos productivos hasta la comercialización
                         del Café de  Origen, garantizando mejores oportunidades de ingreso a los pequeños caficultores.

                    </p>


                </Carousel.Item>

            </Carousel>
        </div>
    );

}

export default HistorySection;