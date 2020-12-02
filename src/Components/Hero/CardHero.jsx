import React from "react";
import "./CardHero.scss";

const CardHero = ({ children, img }) => {
  return (
    <div className="cardHero">
      <img src={img} alt="" />

      {children}
    </div>
  );
};

export default CardHero;
