import React, { memo, useContext } from "react";
import styles from "./ProductsDetail.module.scss";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";

const ProductsDetail = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = () => {
    handleAddToCart(product);
    navigate("/cart");
  };

  return (
    <div className={styles.detail}>
      <div className={styles.product}>
        <img src={product.image} alt={product.name} />
        <div className={styles.info}>
          <h4 className={styles.name}>{product.name}</h4>
          <p className={styles.brand}>{product.brand}</p>
        </div>
      </div>
      <div className={styles.price__info}>
        <p className={styles.price}>
          <span>Item price:</span> {product.price}zł
        </p>
        <ButtonAddToCart product={product} onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default memo(ProductsDetail);
