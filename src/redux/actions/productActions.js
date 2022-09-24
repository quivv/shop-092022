import { ActionType } from "../contants/action-type";

export const setProducts = (product) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};