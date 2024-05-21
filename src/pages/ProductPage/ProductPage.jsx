import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import Product from "../../components/Product/Product";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="product-page">
      <h3 className="product-page__subtitle">{product.name}</h3>
      <div className="product-page__border"></div>
      <Product product={product} additionalClassName="product-page__product" />
    </div>
  );
};

export default ProductPage;
