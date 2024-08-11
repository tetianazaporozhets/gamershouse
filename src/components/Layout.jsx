import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ searchQuery, setSearchQuery, products, onSelectProduct }) => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            products={products}
            onSelectProduct={onSelectProduct}
          />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
