import { memo } from "react";
import styles from "./ButtonAddToCart.module.scss";

const ButtonAddToCart = ({ product, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(product);
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      Add to cart
    </button>
  );
};

export default memo(ButtonAddToCart);
