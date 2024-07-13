import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "./Actions";

export const increment = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const decrement = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
export const createChangeQuantityAction = (id, quantity) => ({
  type: CHANGE_QUANTITY,
  payload: { id, quantity },
});
