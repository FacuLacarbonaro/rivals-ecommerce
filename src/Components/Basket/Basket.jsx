import React from "react";
import { Link } from "react-router-dom";
import "./Basket.scss";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import BasketList from "./BasketList";
import Sidebar from "./Sidebar";

const Basket = () => {
  return (
    <div className="basket">
      <Nav />
      <div className="basket__header">
        <div className="basket__header__container">
          <h2>Shopping Cart</h2>
          <p>Shop</p>
        </div>
      </div>

      <div className="basket__header__route">
        <span>
          <Link className="basket__header__route__link" to="/">
            Home
          </Link>
        </span>
        {">"}
        <span>
          <Link className="basket__header__route__link" to="/shop">
            Shop
          </Link>
        </span>
        {">"}
        <span>
          <Link to="/basket" className="basket__header__route__link">
            Shopping Cart
          </Link>
        </span>
      </div>

      <div className="basket__container">
        <div className="basket__container__main">
          <BasketList />
        </div>

        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
