import PRODUCTS from "../../data/dummy-data";

import { ActionTypes } from "../constants/actionTypes";
import Product from "../../models/product";

const initialState = {
  status: "",
  data: [] || {},
  errors: [],
  isLoading: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ActionTypes.GET_PRODUCT}_PENDING`:
      return {
        ...state,
        status: "PENDING",
        isLoading: true,
      };

    case `${ActionTypes.GET_PRODUCT}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        isLoading: false,
        data: action.payload,
      };

    case `${ActionTypes.GET_PRODUCT}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        isLoading: false,
        errors: [...action.errors],
      };

    case `${ActionTypes.UPDATE_PRODUCT}_PENDING`:
      return {
        ...state,
        status: "PENDING",
        isLoading: true,
      };
    case `${ActionTypes.UPDATE_PRODUCT}_SUCCESS`:
      return {
        ...state,
        status: "SUCCESS",
        isLoading: false,
        data: state.data.map((post) => {
          if (post.id === action.payload.id) {
            post = { ...post, ...action.payload };
          }
          return post;
        }),
      };
    case `${ActionTypes.UPDATE_PRODUCT}_ERROR`:
      return {
        ...state,
        status: "ERROR",
        isLoading: false,
        errors: [action.errors],
      };

    default:
      return state;
  }
};
