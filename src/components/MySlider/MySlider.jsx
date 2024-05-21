import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item1 from "../../images/Item1.jpg";
import Item2 from "../../images/Item2.jpg";
import Item3 from "../../images/Item3.jpg";
import "./MySlider.css";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img className="slider-image" src={Item1} alt="" />
        </div>
        <div className="slider-item">
          <img className="slider-image" src={Item2} alt="" />
        </div>
        <div className="slider-item">
          <img className="slider-image" src={Item3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
