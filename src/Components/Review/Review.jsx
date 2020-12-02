import React from "react";

import Carousel from "react-elastic-carousel";
import { BsChatSquareQuote } from "react-icons/bs";

import "./Review.scss";

const Review = () => {
  return (
    <div className="review">
      <h2>OUR CUSTOMERS SAY</h2>
      <Carousel
        className="review__carousel"
        itemsToShow={1}
        style={{ width: "90%" }}
      >
        <div className="review__carousel__item">
          <BsChatSquareQuote style={{ width: "60px", height: "60px" }} />
          <h2>" REALLY GREAT STORE "</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eligendi qui voluptate hic labore facilis deserunt dolorum
            dignissimos aperiam? Quis ipsam, accusantium debitis cupiditate
            dolores vitae veniam obcaecati expedita minus.
          </p>
          <h3>CHARLY SMITH</h3>
          <p>Customer</p>
        </div>
        <div className="review__carousel__item">
          <BsChatSquareQuote style={{ width: "60px", height: "60px" }} />
          <h2>" FRIENDLY SUPPORT "</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eligendi qui voluptate hic labore facilis deserunt dolorum
            dignissimos aperiam? Quis ipsam, accusantium debitis cupiditate
            dolores vitae veniam obcaecati expedita minus.
          </p>
          <h3>DAEMON STONE</h3>
          <p>Customer</p>
        </div>

        <div className="review__carousel__item">
          <BsChatSquareQuote style={{ width: "60px", height: "60px" }} />
          <h2>" FREE SHIPPING "</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eligendi qui voluptate hic labore facilis deserunt dolorum
            dignissimos aperiam? Quis ipsam, accusantium debitis cupiditate
            dolores vitae veniam obcaecati expedita minus.
          </p>
          <h3>JOHN SMITH</h3>
          <p>Customer</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Review;
