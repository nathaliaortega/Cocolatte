import React, { Component } from "react";
import "../styles/ProductsSection.css";

import { Link as LinkRoute } from "react-router-dom";
class ProductsSection extends Component {
  render() {
    return (
      <div className="productsSection" id="productsSection">
        <p className="products__title" ><b>| Nuestros Productos |</b></p>
        <div className="products__card">
          <p>Compra las bolsas de nuestro
            delicioso café de diferentes regiones y para todos los gustos, ofrecemos
            accesorios para preparar tu café y souvernirs personalizados con nuestra marca.

          </p>
          <LinkRoute className="products__card--link" to={"/productos"}>Ver todos los productos</LinkRoute>
        </div>
      </div>
    );
  }
}

export default ProductsSection;
