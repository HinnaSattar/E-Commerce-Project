import React, { useRef } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import AddSection from "../components/AddSection";
import AddItemSection from "../components/AddItemSection";

const Home = ({ searchQuery, selectedCategory }) => {
  const { data: products, isLoading, isError } = useProducts();
  const productListRef = useRef(null);

  const scrollToProductList = () => {
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  if (isLoading) {
    return (
      <div className="flex justify-center  items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-600">
        Failed to load products.
      </div>
    );
  }

  return (
    <div className="w-full"> 
       <AddSection scrollToProductList={scrollToProductList} />
      <AddItemSection />

      <h1 ref={productListRef} className=" p-4 text-2xl font-bold text-center my-6">
        Our Latest Collections
      </h1>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div className="text-center text-gray-400 mt-10">No products found.</div>
      )}
    </div>
  );
};

export default Home;