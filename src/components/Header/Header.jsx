import React, { memo, useCallback, useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PixlIcon from "../../assets/icons/pixl.svg";
import "./Header.css";
import Search from "../Search/Search";
import CartContext from "../../components/CartContext";

const Header = ({ searchQuery, setSearchQuery, products, onSelectProduct }) => {
  const navigate = useNavigate();
  const { store } = useContext(CartContext);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);
  const { totalQuantity } = useContext(CartContext);

  const handleSelectProduct = useCallback(
    (product) => {
      onSelectProduct(product);
      navigate(`/product-page/${product.id}`);
    },
    [onSelectProduct, navigate]
  );

  const handleCartClick = (e) => {
    if (store.products.length === 0) {
      e.preventDefault();
      setShowEmptyCartMessage(true);
      setTimeout(() => setShowEmptyCartMessage(false), 3000);
    }
  };

  const handleIconClick = () => {
    navigate("/home");
  };
  return (
    <div className="header">
      <img src={PixlIcon} onClick={handleIconClick} alt="" />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        products={products}
        onSelectProduct={handleSelectProduct}
      />
      <div className="header__panel">
        <nav className="header__nav">
          <NavLink className="header__link" to="/home">
            Home
          </NavLink>
          <NavLink
            className="header__link"
            to="/cart"
            onClick={handleCartClick}
          >
            Cart{" "}
            {totalQuantity > 0 && (
              <span className="header__count">{totalQuantity}</span>
            )}
          </NavLink>
          <NavLink className="header__link" to="/signup">
            Sign up
          </NavLink>
        </nav>
      </div>
      {showEmptyCartMessage && (
        <div className="header__cart-message show">Cart is empty</div>
      )}
    </div>
  );
};

export default memo(Header);
