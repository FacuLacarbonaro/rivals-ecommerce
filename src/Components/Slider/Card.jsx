import React from "react";
import store from "../../redux/store";
import {
  CHECKOUT_PRODUCTS_ADD,
  PRODUCT_DETAIL,
} from "../../redux/actions/constants";

import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ category, img, alt, name, price, id, color }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img loading="lazy" src={img} alt={alt} />
      </div>
      <div className="card__description">
        <h2>{category}</h2>
        <Link
          className="card__description__link"
          to={`/product/${id}`}
          onClick={() =>
            store.dispatch({
              type: PRODUCT_DETAIL,
              payload: { category, img, alt, name, price, id, color },
            })
          }
        >
          <h3> {name}</h3>
        </Link>
        <p>$ {price}</p>
        <button
          onClick={() =>
            store.dispatch({
              type: CHECKOUT_PRODUCTS_ADD,
              item: {
                id: id,
                name: name,
                price: price,
                img: img,
                category: category,
                color: color,
              },
            })
          }
        >
          ADD BASKET
        </button>
      </div>
    </div>
  );
};

export default Card;
