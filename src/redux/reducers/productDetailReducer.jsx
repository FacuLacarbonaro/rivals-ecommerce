import { PRODUCT_DETAIL } from "../actions/constants";

const initState = {
  productDetail: {},
};

const productDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    default:
      return state;
  }
};
export default productDetailReducer;
