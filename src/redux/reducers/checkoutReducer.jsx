import {
  CHECKOUT_PRODUCTS,
  CHECKOUT_PRODUCTS_ADD,
  CHECKOUT_PRODUCTS_REMOVE,
} from "../actions/constants";

const initState = {
  checkout: [],
};

const checkoutReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECKOUT_PRODUCTS:
      return {
        ...state,
      };
    case CHECKOUT_PRODUCTS_ADD:
      return {
        ...state,
        checkout: [...state.checkout, action.item],
      };
    case CHECKOUT_PRODUCTS_REMOVE:
      
    let newCheckout = [...state.checkout];

      const index = state.checkout.findIndex(
        (checkoutItem) => checkoutItem.id === action.id
      );

      if (index >= 0) {
        newCheckout.splice(index, 1);
      } else {
      }

      return {
        ...state,
        checkout: newCheckout,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
