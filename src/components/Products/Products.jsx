import "./Products.css";
import React, { memo, useState } from "react";
import Product from "../Product/Product";
import ButtonLoad from "../ButtonLoad/ButtonLoad";
import { useCallback } from "react";

const Products = ({ products = [] }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const handleLoadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 8);
  }, []);
  return (
    <div>
      <h2 className="subtitle">Hot new items</h2>
      <div className="products">
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
