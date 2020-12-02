import React from "react";
import "./Nav.scss";
import { GrCart } from "react-icons/gr";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import logo from "../../Assets/Img/png/logo.png";

const Nav = ({ checkout }) => {
  return (
    <header className="nav">
      <div className="nav__bottom">
        <div className="nav__bottom__left">
          <Link to="/">
            <img src={logo} alt="Rivals" />
          </Link>

          <Link className="nav__bottom__left__item">
            <p>Home</p>
          </Link>
          <Link className="nav__bottom__left__item">
            <p>Shop</p>
          </Link>
          <Link className="nav__bottom__left__item">
            <p>Products</p>
          </Link>
          <Link className="nav__bottom__left__item">
            <p>Category</p>
          </Link>
          <Link className="nav__bottom__left__item">
            <p>Sale</p>
          </Link>
          <Link className="nav__bottom__left__item">
            <p>Last sale's</p>
          </Link>
        </div>
        <div className="nav__bottom__right">
          <input type="text" placeholder="Search product" />
          <Link to="/basket">
            <GrCart className="nav__bottom__right__icon" />
          </Link>
          <p> {checkout.length} </p>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    checkout: state.checkoutReducer.checkout,
  };
};

export default connect(mapStateToProps)(Nav);
