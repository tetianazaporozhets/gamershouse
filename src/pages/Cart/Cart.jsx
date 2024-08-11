import React, { memo, useContext } from "react";
import style from "./Cart.module.scss";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "../../assets/icons/delete.svg";
import CartContext from "../../components/CartContext";
import ButtonPayment from "../../components/ButtonPayment/ButtonPayment";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Cart = () => {
  const { store, handleRemoveFromCart, handleQuantityChange } =
    useContext(CartContext);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={style.cart}>
      <Breadcrumbs goBack={goBack} />
      <h2 className={style.subtitle}>Your cart</h2>
      <div className={style.cart__block}>
        <div className={style.cart__products}>
          {store.products.length === 0 ? (
            <p className={style.empty__cart}>Your cart is empty.</p>
          ) : (
            store.products.map(({ id, image, name, price, cartQuantity }) => (
              <div className={style.product} key={id}>
                <div className={style.product__details}>
                  <img src={image} alt={name} />
                  <h4 className={style.name}>{name}</h4>
                </div>
                <div className={style.product__actions}>
                  <p className={style.product__price}>
                    {(price * cartQuantity).toFixed(2)} zł
                  </p>
                  <select
                    className={style.select}
                    value={cartQuantity}
                    onChange={(e) =>
                      handleQuantityChange(id, parseInt(e.target.value))
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
                    onClick={() => handleRemoveFromCart(id)}
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
