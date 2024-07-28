import React, { memo, useContext } from "react";
import style from "./Cart.module.scss";
import DeleteIcon from "../../assets/icons/delete.svg";
import CartContext from "../../components/CartContext";
import ButtonPayment from "../../components/ButtonPayment/ButtonPayment";

const Cart = () => {
  const { store, handleRemoveFromCart, handleQuantityChange } =
    useContext(CartContext);
  return (
    <div className={style.cart}>
      <h2 className={style.subtitle}>Your cart</h2>
      <div className={style.cart__block}>
        <div className={style.cart__products}>
          {store.products.length === 0 ? (
            <p className={style.empty__cart}>Your cart is empty.</p>
          ) : (
            store.products.map((product) => (
              <div className={style.product} key={product.id}>
                <div className={style.product__details}>
                  <img src={product.image} alt={product.name} />
                  <h4 className={style.name}>{product.name}</h4>
                </div>
                <div className={style.product__actions}>
                  <p className={style.product__price}>
                    {(product.price * product.cartQuantity).toFixed(2)} zł
                  </p>
                  <select
                    className={style.select}
                    value={product.cartQuantity}
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(
                      (quantity) => (
                        <option
                          className={style.option}
                          key={quantity}
                          value={quantity}
                        >
                          {quantity}
                        </option>
                      )
                    )}
                  </select>
                  <img
                    className={style.icon}
                    src={DeleteIcon}
                    alt="Delete"
                    onClick={() => handleRemoveFromCart(product.id)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className={style.total__box}>
          <p className={style.total__price}>
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
    </div>
  );
};

export default memo(Cart);
