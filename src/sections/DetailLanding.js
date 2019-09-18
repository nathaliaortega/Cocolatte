import React from "react";
import "../styles/DetailLanding.css";
import Carousel from "react-bootstrap/Carousel";

const DetailLanding = ({firstSlide,secondSlide,thirdSlide, title, 
    titleFirstSlide, titleSecondSlide, titleThirdSlide, 
    descriptionFirst, descriptionSecond,descriptionThird}) => {
  return (
    <div className="DetailLanding">
      <div className="DetailLanding__header">
        <h1 className="header__title">{title}</h1>
      </div>
      
        <Carousel className="DetailLanding__carousel">
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={firstSlide}
              alt="First slide"
            />
            <Carousel.Caption className="detailLanding__carousel-caption">
              <h3>{titleFirstSlide}</h3>
              <p>{descriptionFirst}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={secondSlide}
              alt="Third slide"
            />

            <Carousel.Caption className="detailLanding__carousel-caption">
              <h3>{titleSecondSlide}</h3>
              <p>{descriptionSecond}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={thirdSlide}
              alt="Third slide"
            />

            <Carousel.Caption className="detailLanding__carousel-caption">
              <h3>{titleThirdSlide}</h3>
              <p>{descriptionThird}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default DetailLanding;
