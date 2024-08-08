import React, { memo } from "react";
import Main from "../components/Main/Main";
import Products from "../components/Products/Products";

const Home = ({ products }) => {
  return (
    <>
      <Main />
      <Products products={products} />
    </>
  );
};

export default memo(Home);
