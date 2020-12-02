import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import store from "../../redux/store";
import { CHECKOUT_PRODUCTS_ADD } from "../../redux/actions/constants";
import "./ProductDetail.scss";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import axios from "axios";

const ProductDetail = ({ productDetail }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setData(response.data);
    });
  }, []);

  const [size, setSize] = useState({ value: "All" });
  const [panelActive, setPanelActive] = useState("a");
  const handleChange = (e) => {
    setSize({ value: e.target.value });
  };

  const panel1 = () => {
    return (
      <div>
        <h2>Product information</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          laboriosam. Quae totam harum odio mollitia a tempore ut enim labore
          reiciendis, recusandae, saepe nostrum, dolorem amet itaque nemo
          reprehenderit tempora.
        </p>
        <ul>
          <li>
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
          </li>
          <li>
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
          </li>
          <li>
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          laboriosam. Quae totam harum odio mollitia a tempore ut enim labore
          reiciendis, recusandae, saepe nostrum, dolorem amet itaque nemo
          reprehenderit tempora.
        </p>
      </div>
    );
  };

  const panel2 = () => {
    return (
      <div>
        <h2>Information</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          laboriosam. Quae totam harum odio mollitia a tempore ut enim labore
          reiciendis, recusandae, saepe nostrum, dolorem amet itaque nemo
          reprehenderit tempora.
        </p>
        <h2>Fabric & care</h2>
        <ul>
          <li>
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
          </li>
          <li>
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
          </li>
          <li>
            Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
          </li>
        </ul>
        <h2>Size </h2>
        <p>one size</p>
      </div>
    );
  };

  const panel3 = () => {
    return (
      <div>
        <h2>Delivery & returns</h2>
        <p>
          We deliver to over 100 countries around the world. For full details of
          the delivery options we offer, please view our Delivery information We
          hope you’ll love every purchase, but if you ever need to return an
          item you can do so within a month of receipt. For full details of how
          to make a return, please view our Returns information
        </p>
      </div>
    );
  };

  const panel4 = () => {
    return (
      <div>
        <h2>Reviews</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          aliquid nihil exercitationem non suscipit rerum magni, veritatis quo
          tenetur rem magnam amet libero ex aspernatur officiis tempore
          accusantium incidunt cum!
        </p>
      </div>
    );
  };

  const render = () => {
    switch (panelActive) {
      case "b":
        return panel2();
      case "c":
        return panel3();
      case "d":
        return panel4();
      default:
        return panel1();
    }
  };

  return (
    <div className="productDetail">
      <Nav />
      <div className="productDetail__container">
        <div className="productDetail__container__left">
          <img src={productDetail.img} alt={productDetail.name} />
        </div>
        <div className="productDetail__container__right">
          <h2 className="productDetail__container__right__name">
            {productDetail.name}
          </h2>
          <p className="productDetail__container__right__price">
            $ {productDetail.price}
          </p>
          <p className="productDetail__container__right__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            necessitatibus perspiciatis aperiam dicta modi officiis perferendis,
            sint labore sequi vero? Nemo perspiciatis atque possimus! Laudantium
            aspernatur cum nemo aliquid quasi.
          </p>

          <select defaultValue={size} onChange={handleChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extraLarge">Extra Large</option>
          </select>
          <button
            onClick={() =>
              store.dispatch({
                type: CHECKOUT_PRODUCTS_ADD,
                item: {
                  id: productDetail.id,
                  name: productDetail.name,
                  price: productDetail.price,
                  img: productDetail.img,
                },
              })
            }
          >
            Add To cart
          </button>
          <h3>Category : {productDetail.category} </h3>
        </div>
      </div>
      <div className="productDetail__bottom">
        <div className="productDetail__bottom__options">
          <h2
            className={
              panelActive === "a"
                ? "productDetail__bottom__options__active"
                : ""
            }
            onClick={() => setPanelActive("a")}
          >
            Description
          </h2>
          <h2
            className={
              panelActive === "b"
                ? "productDetail__bottom__options__active"
                : ""
            }
            onClick={() => setPanelActive("b")}
          >
            Information
          </h2>
          <h2
            className={
              panelActive === "c"
                ? "productDetail__bottom__options__active"
                : ""
            }
            onClick={() => setPanelActive("c")}
          >
            Shipping & Returns
          </h2>
          <h2
            className={
              panelActive === "d"
                ? "productDetail__bottom__options__active"
                : ""
            }
            onClick={() => setPanelActive("d")}
          >
            Reviews
          </h2>
        </div>
        <div className="productDetail__bottom__box">{render()}</div>
      </div>
      <FeaturedSection
        title="NEW ARRIVALS"
        option1="WOMEN'S CLOTHING"
        option2="MEN'S CLOTHING"
        data={data}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productDetail: state.productDetailReducer.productDetail,
  };
};

export default connect(mapStateToProps)(ProductDetail);
