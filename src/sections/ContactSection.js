import React, { Component } from 'react';
import '../styles/ContactSection.css';
import DescriptionContainer from '../containers/DescriptionContainer';
import instagram from '../resources/instagram.png';
import wpp from '../resources/wpp.png';
class ContactSection extends Component {
    render() {
        return (
            <div className="ContactSection" id="ContactSection">
                <p className="contact__title"><b>Contáctanos</b></p>
                <div className="card-container">
                    <DescriptionContainer srcImage={wpp} title="WhatsApp: 3176420450" link="https://api.whatsapp.com/send?phone=573176420450" />
                    <DescriptionContainer srcImage={instagram} title="Instagram: @cocolattecafe" link="https://www.instagram.com/cocolattecafe/" />
                </div>
                
            </div>
        );
    }
}

export default ContactSection;