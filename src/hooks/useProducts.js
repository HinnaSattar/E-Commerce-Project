import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { create } from "zustand";

// Zustand store
export const useProductStore = create((set, get) => ({
  products: JSON.parse(localStorage.getItem("products")) || [],
  setProducts: (products) => {
    localStorage.setItem("products", JSON.stringify(products));
    set({ products });
  },
  addProduct: (product) => {
    const updated = [...get().products, product];
    localStorage.setItem("products", JSON.stringify(updated));
    set({ products: updated });
  },
  updateProduct: (updatedProduct) => {
    const updated = get().products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    localStorage.setItem("products", JSON.stringify(updated));
    set({ products: updated });
  },
  deleteProduct: (id) => {
    const updated = get().products.filter((p) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updated));
    set({ products: updated });
  },
}));

export const useProducts = () => {
  const { setProducts, products } = useProductStore();

  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const apiProducts = response.data;

      // Merge API + Local products without duplicates
      const localProducts = products.filter(
        (lp) => !apiProducts.some((ap) => ap.id === lp.id)
      );
      const mergedProducts = [...apiProducts, ...localProducts];

      setProducts(mergedProducts);
      return mergedProducts;
    },
    refetchOnWindowFocus: false,
  });
};
