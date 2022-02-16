import { CARTS } from "../constants/carts";

export const addToCart = (product) => {
  return { type: CARTS.ADD_TO_CART, product: product };
};

export const removeFromCart = (productId) => {
  return { type: CARTS.REMOVE_FROM_CART, pid: productId };
};
