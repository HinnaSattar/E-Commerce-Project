
import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import AddItemSection from "../components/AddItemSection";

const Home = ({ searchQuery, selectedCategory }) => {
  const { data: products, isLoading, isError } = useProducts();

  let filteredProducts = products || [];

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-500"></div>
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-10 text-red-600">
        Failed to load products.
      </div>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div className="text-center text-gray-400 mt-10">No products found.</div>
      )}

     
      <AddItemSection />
    </div>
  );
};

export default Home;
