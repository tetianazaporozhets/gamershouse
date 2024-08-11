import React, { memo, useMemo } from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
=======
import { useParams, Link, useNavigate } from "react-router-dom";
>>>>>>> mentor/main
import style from "./ProductPage.module.scss";
import ProductsDetail from "../../components/ProductsDetail/ProductsDetail";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
<<<<<<< HEAD
=======
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
>>>>>>> mentor/main
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [products, productId]
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={style.product__page}>
<<<<<<< HEAD
=======
      <ul className={style.list}>
        <li className={style.item}>
          <Link className={style.link} onClick={goBack}>
            Homepage
          </Link>
        </li>
        <li className={style.item}>Product</li>
      </ul>
>>>>>>> mentor/main
      <h3>{product.name}</h3>
      <ProductsDetail product={product} />
    </div>
  );
};

export default memo(ProductPage);
