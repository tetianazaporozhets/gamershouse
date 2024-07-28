import React, { memo, useCallback, useContext } from "react";
import styles from "./Product.module.scss";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

const Product = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = useCallback(() => {
    handleAddToCart(product);
    navigate("/cart");
  }, [handleAddToCart, product, navigate]);

  return (
    <div className={styles.product}>
      <img className={styles.img} src={product.image} alt={product.name} />
      <div className={styles.info}>
        <div className={styles.content}>
          <Link to={`/product-page/${product.id}`}>
            <h4 className={styles.name}>{product.name}</h4>
          </Link>
          <p className={styles.brand}>{product.brand}</p>
        </div>
        <div className={styles.price__box}>
          <p className={styles.price}>{product.price}zł</p>
          <ButtonAddToCart product={product} onAddToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
