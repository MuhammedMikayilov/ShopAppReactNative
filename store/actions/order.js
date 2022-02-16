import { ORDERS } from "../constants/orders";

export const addOrder = (cartItems, totalAmount) => {
  return {
    type: ORDERS.ADD_ORDER,
    orderData: { items: cartItems, amount: totalAmount },
  };
};
