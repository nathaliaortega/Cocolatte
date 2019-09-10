
import React from 'react';
import '../styles/DescriptionContainer.css'

const DescriptionContainer = ({ srcImage, title,link }) => {

    return(
        <a className="contact_link" href={link} target="_blank"><div className = "card" >
            <div className="card__thumb">
                <img src={srcImage} rel="noopener noreferrer" alt="Profile" />
            </div>
            <div className="card__content">
                <header className="content__header">
                    <div className="row-wrapper">
                        <h3 className="card-title">{title}</h3>
                    </div>
                </header>
               
            </div>
        </div ></a>
    );    
}

export default DescriptionContainer;