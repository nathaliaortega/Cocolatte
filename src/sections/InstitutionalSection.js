import React, { Component } from 'react';
import { Link as LinkRoute } from "react-router-dom";
import '../styles/InstitutionalSection.css';
class InstitutionalSection extends Component {
    render() {
        return (
            <div className="instituionalSection" id="instituionalSection">
                <p className="instituional__title" ><b>| Línea institucional |</b></p>
                <div className="institutional__container">
                    <div className="institutional__card" id="card-organization">
                        <div className="institutional__card-description">
                            <p className="institutional__card-title">Café Empresas</p>
                            <p className="institutional__card-text">Nosotros te ayudamos a que en tu empresa disfruten al tomar un café fresco, de la mejor 
                            calidad, que rinde mucho más y a un buen precio.</p>
                            <a className="institutional__card__link" href="mailto:cocolattecafe@gmail.com?subject=Cotización%20café%20para%20empresas"><b>Consíguelo Aquí</b></a>
                            <LinkRoute className="institutional--info" to={"/cafe-Institucional"}>Más Información</LinkRoute>

                        </div>
                    </div>
                    <div className="institutional__card" id="card-catering">
                        <div className="institutional__card-description">
                            <p className="institutional__card-title">Catering</p>
                            <p className="institutional__card-text">Atendemos tus eventos. Para cualquier cantidad de personas.
                            Nos acomodamos a tu presupuesto. Te aseguramos calidad, puntualidad y buen servicio.</p>
                            <a className="institutional__card__link" href="mailto:cocolattecafe@gmail.com?subject=Cotización%20Catering"><b>Consíguelo Aquí</b></a>
                            <LinkRoute className="institutional--info" to={"/catering"}>Más Información</LinkRoute>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default InstitutionalSection;