import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useMemo, Suspense, lazy } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import useFetch from "./components/Hooks/useFetch";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";

const LazySignUp = lazy(() => import("./pages/SignUp/SignUp"));
const LazyCart = lazy(() => import("./pages/Cart/Cart"));
const LazyProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));

function App() {
  const { products, isLoading, error } = useFetch(
    "https://6649ee3d4032b1331bef44bb.mockapi.io/api/v1/products"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectProduct = (product) => {
    console.log("Selected product:", product);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    products={products}
                    onSelectProduct={handleSelectProduct}
                  />
                }
              >
                {/* <Route
                  path="/"
                  element={<Home products={products} />}
                />
                <Route
                  path="/home"
                  element={<Home products={products} />}
                /> */}
                <Route index element={<Home products={products} />} />
                <Route path="home" element={<Navigate to="/" />} />
                <Route path="signup" element={<LazySignUp />} />
                <Route path="cart" element={<LazyCart />} />
                <Route
                  path="product-page/:productId"
                  element={<LazyProductPage products={products} />}
                />
                <Route path="thank-you" element={<ThankYouPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Suspense>
  );
}

export default App;
