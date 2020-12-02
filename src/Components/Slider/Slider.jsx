import React from "react";

import Carousel from "react-elastic-carousel";

import "./Slider.scss";

const Slider = ({ children }) => {
  const breakpoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 500,
      itemsToShow: 2,
    },
    {
      width: 768,
      itemsToShow: 3,
    },
    {
      width: 1200,
      itemsToShow: 4,
    },
  ];

  return (
    <div className="slider">
      <Carousel
        style={{ width: "90%" }}
        breakPoints={breakpoints}
        className="slider__carousel"
      >
        {children}
      </Carousel>
    </div>
  );
};

export default Slider;
