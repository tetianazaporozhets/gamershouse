import React from "react";
import "./Product.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Product = ({ product, additionalClassName }) => {
  const productClasses = additionalClassName
    ? `product product-page__product`
    : `product`;
  return (
    <div className={productClasses}>
      <img className="product__img" src={product.image} alt="" />
      <div className="product__info">
        <Link to={`/product-page/${product.id}`}>
          <h4 className="product__subtitle">{product.name}</h4>
        </Link>
        <p className="product__brand">{product.brand}</p>
        <div className="product__price">
          <p className="price">{product.price}zł</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Product;
