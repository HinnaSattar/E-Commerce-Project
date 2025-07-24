import { useEffect, useState } from "react";
import { useProductStore } from "./useProductStore";

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        // If no local products, initialize with API data
        if (products.length === 0) {
          setProducts(data);
        } else {
          // Merge API products not present in local state
          const localIds = new Set(products.map((p) => p.id));
          const merged = [...products, ...data.filter((p) => !localIds.has(p.id))];
          setProducts(merged);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { data: products, isLoading, isError };
};