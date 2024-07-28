import { Route, Routes } from "react-router-dom";
import { useState, useMemo, Suspense, lazy } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer/Footer";
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
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/" element={<Home products={memoizedProducts} />} />
              <Route
                path="/home"
                element={<Home products={memoizedProducts} />}
              />
              <Route path="/signup" element={<LazySignUp />} />
              <Route path="/cart" element={<LazyCart />} />
              <Route
                path="/product-page/:productId"
                element={<LazyProductPage products={memoizedProducts} />}
              />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
