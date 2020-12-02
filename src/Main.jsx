import React, { useEffect } from "react";
import Pusher from "pusher-js";
import { connect } from "react-redux";
import FeaturedSection from "./Components/FeaturedSection/FeaturedSection";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";

import BlogBanner from "./Components/Blog/BlogBanner";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";

const Main = ({ fetchProducts, productReducer }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const pusher = new Pusher("2cff529b62a2cf4f45bc", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("product");
    channel.bind("inserted", (data) => {
      console.log(JSON.stringify(data));
    });
  });

  return (
    <div className="main">
      <Nav />
      <Hero />
      <FeaturedSection
        title="FEATURED PRODUCTS"
        option1="WOMEN'S CLOTHING"
        option2="MEN'S CLOTHING"
      />
      <FeaturedSection
        title="NEW ARRIVALS"
        option1="WOMEN'S CLOTHING"
        option2="MEN'S CLOTHING"
      />

      <BlogBanner />
      <Review />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productReducer: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch({ type: "FETCH_PRODUCTS" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
