
import React from 'react';
import '../styles/DescriptionContainer.css'

const DescriptionContainer = ({ srcImage, title }) => {

    return(
        <div className = "card" >
            <div className="card__thumb">
                <img src={srcImage} alt="Profile" />
            </div>
            <div className="card__content">
                <header className="content__header">
                    <div className="row-wrapper">
                        <h3 className="card-title">{title}</h3>
                    </div>
                </header>
               
            </div>
        </div >
    );    
}

export default DescriptionContainer;