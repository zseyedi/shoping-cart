import { combineReducers } from "redux";

import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
  productsState: productReducer,
});

export default rootReducer;
