import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductStore = create(persist(
  (set, get) => ({
    products: [],

    setProducts: (products) => set({ products }),

    addProduct: (newProduct) => {
      set((state) => ({ products: [newProduct, ...state.products] }));
    },

    updateProduct: (updatedProduct) => {
      set((state) => ({
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      }));
    },

    deleteProduct: (productId) => {
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      }));
    },
  }),
  { name: "product-storage" }
));
