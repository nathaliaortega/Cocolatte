import React from "react";
import "../styles/DetailLanding.css";
import Carousel from "react-bootstrap/Carousel";
import NavBarDetail from '../components/NavBarDetail'

const DetailLanding = ({mail,firstSlide,secondSlide,thirdSlide, title, 
    titleFirstSlide, titleSecondSlide, titleThirdSlide, 
    descriptionFirst, descriptionSecond,descriptionThird}) => {
      return (
    <div className="detailLanding">
      <NavBarDetail/>
      <div className="detailLanding__header">
        <h2 className="header__title">{title}</h2>
        <a className="header__link" href={mail}><b>Consíguelo Aquí</b></a>
      </div>
      
        <Carousel className="detailLanding__carousel">
          <Carousel.Item className="detail__carousel-item">
            <img
              className="d-block w-100 detail_img"
              src={firstSlide}
              alt="First slide"
            />
            <Carousel.Caption className="detailLanding__carousel-caption">
              <h3>{titleFirstSlide}</h3>
              <p>{descriptionFirst}</p>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item className="detail__carousel-item">
            <img
              className="d-block w-100 detail_img"
              src={secondSlide}
              alt="Third slide"
            />

            <Carousel.Caption className="detailLanding__carousel-caption">
              <h3>{titleSecondSlide}</h3>
              <p>{descriptionSecond}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="detail__carousel-item">
            <img
              className="d-block w-100 detail_img"
              src={thirdSlide}
              alt="Third slide"
            />

            <Carousel.Caption className="detailLanding__carousel-caption">
              <h3>{titleThirdSlide}</h3>
              <p>{descriptionThird} <a href="http://mx.trabajando.com/contenido/noticia/12057/tomar-cafe-en-el-trabajo-causa-efectos-positivos.html">1</a></p>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default DetailLanding;
