import React, { Component } from 'react';
import '../styles/ContactSection.css';
import DescriptionContainer from '../containers/DescriptionContainer';
import instagram from '../resources/instagram.png';
import wpp from '../resources/wpp.png';
class ContactSection extends Component {
    render() {
        return (
            <div className="ContactSection">
                <p className="contact__title"><b>Contáctanos</b></p>
                <div className="card-container">
                    <DescriptionContainer srcImage={wpp} title="WhatsApp: 3176420450" />
                    <DescriptionContainer srcImage={instagram} title="Instagram: @cocolattecafe" />
                </div>
                
            </div>
        );
    }
}

export default ContactSection;