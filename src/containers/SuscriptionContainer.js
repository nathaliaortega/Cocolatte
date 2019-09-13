
import React from 'react';
import '../styles/SuscriptionContainer.css'

const SuscriptionContainer = ({ title, bgColor, textColor, description, origin, months, price, linkBuy }) => {

    return (
        <div className="suscription__card" style={{ backgroundColor: `${bgColor}` }} >

            <div className="card__content">
                <header className="content__header">
                    <div className="row-wrapper">
                        <h3 style={{ color: `${textColor}` }} className="suscription__card-title">{title}</h3>
                    </div>
                </header>
                <p style={{ color: `${textColor}` }} className="suscription__card__description"> {description}</p>
                <p style={{ color: `${textColor}` }} className="suscription__card__origin"> <b>{origin}</b></p>

                <div style={{ backgroundColor: `${textColor}` }} className="suscription__card__months">
                    <p> {months}</p>
                </div>
                <p style={{ color: `${textColor}` }} className="suscription__card__price"> {price}</p>
                <a  style={{ backgroundColor: `${textColor}` }} className="suscription__card__link" href={linkBuy}>Compra aquí</a>


            </div>
        </div >
    );
}

export default SuscriptionContainer;