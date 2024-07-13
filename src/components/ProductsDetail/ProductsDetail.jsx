import React, { memo, useCallback, useContext } from "react";
import "./ProductsDetail.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";

const ProductsDetail = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = useCallback(() => {
    handleAddToCart(product);
    navigate("/cart");
  }, [handleAddToCart, product, navigate]);
  return (
    <div className="product-detail">
      <div className="product-detail__product">
        <img
          className="product-detail__image"
          src={product.image}
          alt={product.name}
        />
        <div className="product-detail__info">
          <h4 className="product-detail__subtitle">{product.name}</h4>
          <p className="product-detail__brand">{product.brand}</p>
        </div>
      </div>
      <div className="product-detail__price-info">
        <p className="product-detail__price">
          <span>Item price:</span> {product.price}zł
        </p>
        <ButtonAddToCart product={product} onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default memo(ProductsDetail);
