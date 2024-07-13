import React, { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import ProductsDetail from "../../components/ProductsDetail/ProductsDetail";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [products, productId]
  );

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="product-page">
      <h3 className="product-page__subtitle">{product.name}</h3>
      <div className="product-page__border"></div>
      <ProductsDetail product={product} />
    </div>
  );
};

export default memo(ProductPage);
