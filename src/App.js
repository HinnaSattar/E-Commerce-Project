// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (query) => setSearchQuery(query);
  const handleCategoryChange = (category) => setSelectedCategory(category);

  return (
    <div className=" bg-gray-50 min-h-screen">
      <Navbar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <Toaster position="top-right" />
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
