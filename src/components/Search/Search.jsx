import React, { memo } from "react";
import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { useLocation } from "react-router-dom";

const Search = ({ products, onSelectProduct }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (products) {
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredProducts);
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [searchQuery, products]);

  useEffect(() => {
    setSearchQuery("");
    setSearchResults([]);
  }, [location]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectProduct = (product) => {
    onSelectProduct(product);
    setSearchQuery("");
  };

  return (
    <div className={styles.search__container}>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleChange}
      />
      {searchQuery && (
        <ul className={styles.results}>
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <li key={product.id} onClick={() => handleSelectProduct(product)}>
                {product.name}
              </li>
            ))
          ) : (
            <li className={styles.no__results}>Product not found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default memo(Search);
