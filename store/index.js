import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/products";
import { cartReducer } from "./reducers/cart";
import { ordersReducer } from "./reducers/order";

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartReducer,
  orders: ordersReducer,
});

export const store = createStore(rootReducer);
