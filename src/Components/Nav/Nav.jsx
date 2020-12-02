import React from "react";
import "./Nav.scss";
import { GrCart } from "react-icons/gr";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DropDownMenu from "../DropDownMenu/DropDownMenu";
import DropDownItem from "../DropDownItem/DropDownItem";

import logo from "../../Assets/Img/png/logo.png";

const Nav = ({ checkout }) => {
  return (
    <header className="nav">
      <div className="nav__bottom">
        <div className="nav__bottom__left">
          <Link to="/">
            <img src={logo} alt="Rivals" />
          </Link>

          <DropDownMenu category="Home">
            <DropDownItem name="One" />
            <DropDownItem name="Two" />
          </DropDownMenu>

          <DropDownMenu category="Shop">
            <DropDownItem name="One" />
            <DropDownItem name="Two" />
          </DropDownMenu>

          <DropDownMenu category="Products">
            <DropDownItem name="One" />
            <DropDownItem name="Two" />
          </DropDownMenu>

          <DropDownMenu category="Category">
            <DropDownItem name="One" />
            <DropDownItem name="Two" />
          </DropDownMenu>

          <DropDownMenu category="Sale">
            <DropDownItem name="One" />
            <DropDownItem name="Two" />
          </DropDownMenu>

          <DropDownMenu category="Last sale's">
            <DropDownItem name="One" />
            <DropDownItem name="Two" />
          </DropDownMenu>
        </div>
        <div className="nav__bottom__right">
          <input type="text" placeholder="Search product" />
          <Link to="/basket">
            <GrCart className='nav__bottom__right__icon' />
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
