import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../Slider/Card";
import Slider from "../Slider/Slider";
import "./FeaturedSection.scss";

const FeaturedSection = ({ title, option1, option2, productReducer }) => {
  const [option, setOption] = useState(true);

  const menClothes = productReducer.filter((obj) => obj.gender === "Men");
  const womenClothes = productReducer.filter((obj) => obj.gender === "Women");

  return (
    <div className="featuredSection">
      <div className="featuredSection__title">
        <h2>{title}</h2>
        <div className="featuredSection__title__options">
          <span
            className={
              option
                ? "featuredSection__title__options__true"
                : "featuredSection__title__options__false"
            }
            onClick={() => setOption(true)}
          >
            {option1}
          </span>
          <span
            className={
              option
                ? "featuredSection__title__options__false"
                : "featuredSection__title__options__true"
            }
            onClick={() => setOption(false)}
          >
            {option2}
          </span>
        </div>
      </div>

      {option ? (
        <Slider>
          {womenClothes.map((item) => (
            <Card
              key={item._id}
              img={item.img}
              category={item.productCategory}
              name={item.productName}
              price={item.productPrice}
              id={item._id}
              color={item.productColor}
            />
          ))}
        </Slider>
      ) : (
        <Slider>
          {menClothes.map((item) => (
            <Card
              key={item._id}
              img={item.img}
              category={item.productCategory}
              name={item.productName}
              price={item.productPrice}
              id={item._id}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productReducer: state.productReducer.products,
  };
};
export default connect(mapStateToProps)(FeaturedSection);
