import React, { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductPage.module.scss";
import ProductsDetail from "../../components/ProductsDetail/ProductsDetail";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [products, productId]
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={style.product__page}>
      <h3>{product.name}</h3>
      <ProductsDetail product={product} />
    </div>
  );
};

export default memo(ProductPage);
