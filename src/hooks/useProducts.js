import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { create } from "zustand";

// Local store to manage products for editing/deleting
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
}));

export const useProducts = () => {
  const { setProducts } = useProductStore();

  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      return response.data;
    },
  });
};
