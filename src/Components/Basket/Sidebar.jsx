import React, { useState } from "react";
import { connect } from "react-redux";

import "./Sidebar.scss";

const Sidebar = ({ checkout }) => {
  const basketSubTotal = checkout.reduce(
    (price, item) => item.price + price,
    0
  );

  const [addShip, setAddShip] = useState(0);

  const totalBasket = basketSubTotal + addShip;

  const standardShip = () => {
    setAddShip(100);
  };

  const expressShip = () => {
    setAddShip(300);
  };

  const freeShip = () => {
    setAddShip(0);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <h2>Cart total</h2>
        <hr style={{ borderBottom: "1px solid gray", width: "80%" }} />
        <div className="sidebar__content__subtotal">
          <p>Subtotal</p>
          <p>
            ({checkout.length} items) $ {basketSubTotal}{" "}
          </p>
        </div>
        <div className="sidebar__content__shipping">
          <h2>Shipping</h2>
          <hr style={{ borderBottom: "1px solid gray", width: "80%" }} />

          <div className="sidebar__content__shipping__option">
            <input type="radio" name="option" onClick={freeShip} />
            Free Shipping ($0)
          </div>
          <div className="sidebar__content__shipping__option">
            <input type="radio" name="option" onClick={standardShip} />
            Stardard ($100)
          </div>
          <div className="sidebar__content__shipping__option">
            <input type="radio" name="option" onClick={expressShip} />
            Express ($300)
          </div>
        </div>
        <hr style={{ borderBottom: "1px solid gray", width: "80%" }} />

        <div className="sidebar__total">
          <h3>Total: </h3>
          <h4>$ {totalBasket} </h4>
        </div>

        <div className="sidebar__payment">
          <button type="submit"> PROCEED TO CHECKOUT </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkout: state.checkoutReducer.checkout,
  };
};

export default connect(mapStateToProps)(Sidebar);
