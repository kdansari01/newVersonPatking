import React from "react";
import Slider from "react-slick";
import "./slidecard.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from "./Card";
const SlideCard = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <Slider {...settings}>
       {[1,2,3,4,5,6].map((slide,ind) =>(
        <Card key={slide} />
       ))}
      </Slider>
    </div>
  );
};

export default SlideCard;
