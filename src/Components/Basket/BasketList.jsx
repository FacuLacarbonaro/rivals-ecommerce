import React from "react";
import { connect } from "react-redux";
import "./BasketList.scss";

import BasketItem from "./BasketItem";

const BasketList = ({ checkout }) => {
  return (
    <div className="basketList">
      <h3>CHECKIT</h3>
      <div style={{width:"100%"}}>
        {checkout.map((itemCheckout, i) => (
          <BasketItem key={i}>{itemCheckout}</BasketItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkout: state.checkoutReducer.checkout,
  };
};

export default connect(mapStateToProps)(BasketList);
