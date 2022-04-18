import { productsService } from "../../components/Api/services/Products";
import { ActionTypes } from "../constants/actionTypes";

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: `${ActionTypes.GET_PRODUCT}_PENDING`,
  });
  productsService.getAllProducts().then(({ data }) => {
    dispatch({
      type: `${ActionTypes.GET_PRODUCT}_SUCCESS`,
      payload: data,
    });
  });
};
