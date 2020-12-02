import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../actions/constants";

const initState = {
  products: [],
  error: "",
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: "",
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        users: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default productReducer;
