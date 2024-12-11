import React from "react";
import "./MyCarousel.css";
import Carousel from "react-bootstrap/carousel";

const MyCarousel = () => {
  return (
    <div className="Carousel">
      <Carousel>
        <Carousel.Item className="carousel-item1">
          <Carousel.Caption className="h-100 d-flex flex-column align-items-center justify-content-top">
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-capitalize text-start">

                </h1>
                <p className="text-start">

                </p>
                {/* <GreenBtn btnTitle="Check our holidays" btnLink="/" /> */}
              </div>
              <div className="col-lg-6 d-none d-lg-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item2">
          <Carousel.Caption className="h-100">
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-capitalize text-start">
                </h1>
                <p className="text-start">

                </p>
                {/* <GreenBtn btnTitle='Our city breaks' btnLink='/' /> */}
              </div>
              <div className="col-lg-6 d-none d-lg-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item3">
          <Carousel.Caption className="h-100">
            <div className="row h-100">
              <div className="col-lg-6 d-none d-lg-block"></div>
              <div className="col-lg-6 d-flex flex-column align-items-end justify-content-center">
                <h1 className="text-capitalize text-start">

                </h1>
                <p className="text-start">

                </p>
                {/* <GreenBtn btnTitle='Check all destinations' btnLink='/' /> */}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
