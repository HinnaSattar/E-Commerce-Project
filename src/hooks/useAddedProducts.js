import { create } from "zustand";

export const useAddedProducts = create((set) => ({
  addedProducts: [],
  addProduct: (product) =>
    set((state) => ({
      addedProducts: [...state.addedProducts, product],
    })),
}));
