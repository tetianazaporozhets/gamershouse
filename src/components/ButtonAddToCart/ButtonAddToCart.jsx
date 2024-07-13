import { memo } from "react";
import "./ButtonAddToCart.css";

const ButtonAddToCart = ({ product, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(product);
  };
  return (
    <button className="button__addtocart" onClick={handleClick}>
      Add to cart
    </button>
  );
};

export default memo(ButtonAddToCart);
