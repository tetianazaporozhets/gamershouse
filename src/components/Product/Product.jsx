import React, { memo, useCallback, useContext } from "react";
import "./Product.css";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

const Product = ({ product, additionalClassName }) => {
  const productClasses = additionalClassName
    ? `product product-page__product`
    : `product`;
  const { handleAddToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = useCallback(() => {
    handleAddToCart(product);
    navigate("/cart");
  }, [handleAddToCart, product, navigate]);

  return (
    <div className={productClasses}>
      <img className="product__img" src={product.image} alt={product.name} />
      <div className="product__info">
        <Link to={`/product-page/${product.id}`}>
          <h4 className="product__subtitle">{product.name}</h4>
        </Link>
        <p className="product__brand">{product.brand}</p>
        <div className="product__price">
          <p className="price">{product.price}zł</p>
          <ButtonAddToCart product={product} onAddToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
