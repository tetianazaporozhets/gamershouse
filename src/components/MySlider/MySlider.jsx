import { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item1 from "../../images/Item1.jpg";
import Item2 from "../../images/Item2.jpg";
import Item3 from "../../images/Item3.jpg";
import styles from "./MySlider.module.scss";

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <div className={styles.slickNext}></div>,
    prevArrow: <div className={styles.slickPrev}></div>,
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img className={styles.img} src={Item1} alt="PS5" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={Item2} alt="Laptop" />
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={Item3} alt="Steam-deck" />
        </div>
      </Slider>
    </div>
  );
};

export default memo(MySlider);
