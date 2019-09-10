import React, { Component } from 'react';
import '../styles/SuscriptionSection.css';
import SuscriptionContainer from '../containers/SuscriptionContainer';
class SuscriptionSection extends Component{
    render()
    {
        return(
            <div className="suscriptionSection" id="suscriptionSection">
                <p className="suscription__title"><b>Suscríbete aquí</b></p>
                <p className="suscription__description">Elige tu plan, cómpralo y difruta un café delicioso</p>
                <div className="suscription__card-container">
                    <SuscriptionContainer title="Principiantes" textColor="rgba(136,162,0,1)" bgColor="rgba(136,162,0,0.1)" description="Café estándar con notas dulces de chocolate. Típico colombiano con una molienda media." origin="Un Origen" months="3 meses" price="COP$100.000"  linkBuy="https://marvelapp.com/project/4329576/canvas/61128740/"/>
                    <SuscriptionContainer title="Aventureros" textColor="rgba(229,137,0,1)" bgColor="rgba(229,137,0,0.1)" description="Dos opciones de café, uno tipo estándar y otro con notas diferenciadoras herbales o frutales." origin="Dos Orígenes" months="3 meses" price="COP$120.000"  linkBuy="https://marvelapp.com/project/4329576/canvas/61128740/"/>
                    <SuscriptionContainer title="Pro" textColor="rgba(197,9,0,1)" bgColor="rgba(197,9,0,0.1)" description="Café edición limitada con sabores pronunciados de fruta madura y acidez prolongada." origin="Un Origen" months="3 meses" price="COP$150.000"  linkBuy="https://marvelapp.com/project/4329576/canvas/61128740/"/>


                </div>
                
            </div>
        );
    }
}

export default SuscriptionSection;