import React from "react";
import { PRODUCT_DETAIL } from "../../redux/actions/constants";
import "./BasketItem.scss";

import {
  CHECKOUT_PRODUCTS_ADD,
  CHECKOUT_PRODUCTS_REMOVE,
} from "../../redux/actions/constants";

import store from "../../redux/store";
import { Link } from "react-router-dom";

const BasketItem = ({ children }) => {
  return (
    <div className="basketItem">
      <img src={children.img} alt={children.name} />
      <Link
        className="basketItem__name"
        to={`/product/${children.id}`}
        onClick={() =>
          store.dispatch({ type: PRODUCT_DETAIL, payload: children })
        }
      >
        <p>{children.name}</p>
      </Link>
      <p> $ {children.price} </p>

      <div className="basketItem__buttons">
        <button
          className="basketItem__buttons__add"
          onClick={() =>
            store.dispatch({
              type: CHECKOUT_PRODUCTS_ADD,
              item: {
                id: children.id,
                name: children.name,
                price: children.price,
                img: children.img,
              },
            })
          }
        >
          <p>ADD ANOTHER EQ</p>
        </button>
        <button
          className="basketItem__buttons__remove"
          onClick={() =>
            store.dispatch({ type: CHECKOUT_PRODUCTS_REMOVE, id: children.id })
          }
        >
          <p>REMOVE</p>
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
