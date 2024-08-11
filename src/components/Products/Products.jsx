import styles from "./Products.module.scss";
import React, { memo, useState } from "react";
import Product from "../Product/Product";
import ButtonLoad from "../ButtonLoad/ButtonLoad";
import { useCallback } from "react";

<<<<<<< HEAD
const Products = ({ products = [] }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const handleLoadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 8);
  }, []);
=======
const MAX_PRODUCT_COUNT_TO_SHOW = 8;

const Products = ({ products = [] }) => {
  const [visibleCount, setVisibleCount] = useState(MAX_PRODUCT_COUNT_TO_SHOW);
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + MAX_PRODUCT_COUNT_TO_SHOW);
  };

>>>>>>> mentor/main
  return (
    <div>
      <h2 className={styles.subtitle}>Hot new items</h2>
      <div className={styles.products}>
        {products.slice(0, visibleCount).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {visibleCount < products.length && (
        <ButtonLoad onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default memo(Products);
