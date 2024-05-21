import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import SignUp from "./pages/SignUp/SignUp";
import PageNotFound from "./pages/PageNotFound";
import ProductPage from "./pages/ProductPage/ProductPage";
import Footer from "./pages/Footer/Footer";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        "https://6649ee3d4032b1331bef44bb.mockapi.io/api/v1/products"
      );
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/home" element={<Home products={products} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/product-page/:productId"
              element={<ProductPage products={products} />}
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
