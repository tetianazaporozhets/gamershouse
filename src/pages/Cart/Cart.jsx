import React, { memo, useContext } from "react";
import "./Cart.css";
import DeleteIcon from "../../assets/icons/delete.svg";
import CartContext from "../../components/CartContext";
import ButtonPayment from "../../components/ButtonPayment/ButtonPayment";

const Cart = () => {
  const { store, handleRemoveFromCart, handleQuantityChange } =
    useContext(CartContext);
  return (
    <div className="cart">
      <div className="cart__products">
        {store.products.length === 0 ? (
          <p className="cart__empty">Your cart is empty.</p>
        ) : (
          store.products.map((product) => (
            <div className="cart__product" key={product.id}>
              <div className="cart__product-details">
                <img
                  className="cart__image"
                  src={product.image}
                  alt={product.name}
                />
                <h4 className="cart__name">{product.name}</h4>
              </div>
              <div className="cart__product-actions">
                <p className="cart__price">
                  {(product.price * product.cartQuantity).toFixed(2)} zł
                </p>
                <select
                  className="cart__select"
                  value={product.cartQuantity}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value))
                  }
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(
                    (quantity) => (
                      <option key={quantity} value={quantity}>
                        {quantity}
                      </option>
                    )
                  )}
                </select>
                <img
                  className="cart__icon"
                  src={DeleteIcon}
                  alt="Delete"
                  onClick={() => handleRemoveFromCart(product.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart__total">
        <p className="cart__total-price">
          Total:{" "}
          {store.products.reduce(
            (total, product) =>
              total + parseFloat(product.price) * (product.cartQuantity || 1),
            0
          )}{" "}
          zł
        </p>
        <ButtonPayment />
      </div>
    </div>
  );
};

export default memo(Cart);
