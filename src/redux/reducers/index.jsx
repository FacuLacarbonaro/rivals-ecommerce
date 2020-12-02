import { combineReducers } from "redux";

import productReducer from "./productReducer";
import checkoutReducer from "./checkoutReducer";
import productDetailReducer from "./productDetailReducer";

const rootReducer = combineReducers({
  productReducer: productReducer,
  checkoutReducer: checkoutReducer,
  productDetailReducer: productDetailReducer,
  
});

export default rootReducer;
