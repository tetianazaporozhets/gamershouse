import React, { memo, useCallback, useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PixlIcon from "../../assets/icons/pixl.svg";
import styles from "./Header.module.scss";
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
    <div className={styles.header}>
      <img src={PixlIcon} onClick={handleIconClick} alt="Icon" />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        products={products}
        onSelectProduct={handleSelectProduct}
      />
      <nav>
        <NavLink className={styles.link} to="/home">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/cart" onClick={handleCartClick}>
          Cart {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </NavLink>
        <NavLink className={styles.link} to="/signup">
          Sign up
        </NavLink>
      </nav>
      {showEmptyCartMessage && (
        <div className={`${styles.message} ${styles.show}`}>Cart is empty</div>
      )}
    </div>
  );
};

export default memo(Header);
