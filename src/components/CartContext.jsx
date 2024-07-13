import React from "react";
import { useReducer, createContext, useMemo } from "react";
import { initialState, cartReducer } from "./Reducers";
import {
  createChangeQuantityAction,
  decrement,
  increment,
} from "./ActionCreators";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [store, dispatch] = useReducer(cartReducer, initialState);

  const totalQuantity = store.products.reduce(
    (total, product) => total + product.cartQuantity,
    0
  );

  const handleAddToCart = (product) => {
    dispatch(increment(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(decrement(id));
  };
  const handleQuantityChange = (id, quantity) => {
    dispatch(createChangeQuantityAction(id, quantity));
  };
  const value = useMemo(
    () => ({
      store,
      handleAddToCart,
      handleRemoveFromCart,
      handleQuantityChange,
      totalQuantity,
    }),
    [store, totalQuantity]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
