import React, { memo, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./ProductPage.module.scss";
import ProductsDetail from "../../components/ProductsDetail/ProductsDetail";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [products, productId]
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={style.product__page}>
      <Breadcrumbs goBack={goBack} />
      <h3>{product.name}</h3>
      <ProductsDetail product={product} />
    </div>
  );
};

export default memo(ProductPage);
