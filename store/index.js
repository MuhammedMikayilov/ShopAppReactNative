import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/products";
import { cartReducer } from "./reducers/cart";

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartReducer,
});

export const store = createStore(rootReducer);
