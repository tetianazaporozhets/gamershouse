import { Route, Routes } from "react-router-dom";
import React, { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import SignUp from "./pages/SignUp/SignUp";
import PageNotFound from "./pages/PageNotFound";
import ProductPage from "./pages/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";
import useFetch from "./components/Hooks/useFetch";

function App() {
  const { products, isLoading, error } = useFetch(
    "https://6649ee3d4032b1331bef44bb.mockapi.io/api/v1/products"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectProduct = (product) => {
    console.log("Selected product:", product);
  };
  const memoizedProducts = useMemo(() => products, [products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            products={memoizedProducts}
            onSelectProduct={handleSelectProduct}
          />
          <Routes>
            <Route path="/" element={<Home products={memoizedProducts} />} />
            <Route
              path="/home"
              element={<Home products={memoizedProducts} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/product-page/:productId"
              element={<ProductPage products={memoizedProducts} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
