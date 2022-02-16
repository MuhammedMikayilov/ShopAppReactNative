import Order from "../../models/order";
import { ORDERS } from "../constants/orders";
const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS.ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }

  return state;
};
