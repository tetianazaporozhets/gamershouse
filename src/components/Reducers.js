import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "./Actions";

export const initialState = {
  products: [],
};

export const cartReducer = (store, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = store.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        return {
          ...store,
          products: store.products.map((product, index) =>
            index === existingProductIndex
              ? { ...product, cartQuantity: product.cartQuantity + 1 }
              : product
          ),
        };
      }
      return {
        ...store,
        products: [...store.products, { ...action.payload, cartQuantity: 1 }],
      };
    case REMOVE_FROM_CART:
      const filteredProduct = store.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...store,
        products: filteredProduct,
      };
    case CHANGE_QUANTITY:
      const updatedProducts = store.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, cartQuantity: action.payload.quantity }
          : product
      );
      return {
        ...store,
        products: updatedProducts,
      };
    default:
      return store;
  }
};
