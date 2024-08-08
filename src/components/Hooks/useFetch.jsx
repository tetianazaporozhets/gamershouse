import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [url]);
  return { products, isLoading, error };
};

export default useFetch;
