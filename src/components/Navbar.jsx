import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import { useCart } from "../hooks/useCart";
import signOutImg from "../assets/cart1.png";


const Navbar = ({ onSearch, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const cartItems = useCart((state) => state.cart) || [];
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  {/*const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };*/}

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
        onSearch(searchTerm.trim());
    }
};


  return (

    <div className="w-full shadow sticky top-0 z-50 ">
      {/* Top Row */}
      <div className=" bg-gray-100  w-full mx-auto flex items-center justify-between  py-2  px-4  sm:px-8 md:px-12 lg:px-16 xl:px-20 ">
        {/* Left - Logo */}
        <div
          className="text-2xl font-bold text-gray-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          🛍️ FakeStore
        </div>       
        <div className="flex gap-4 " >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-500 font-bold text-1xl "
                : "text-gray-400 hover:text-gray-500 font-bold" 
            }
          >
            Home
          </NavLink>
          
        </div>

        {/* Right - Auth Links */}
       
        <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-gray-500 font-bold text-1xl relative"
                : "text-gray-400 hover:text-gray-500 font-bold relative"
            }
          >
            <button className="flex items-center  transition-transform duration-300 hover:scale-110">
                <img src={signOutImg} alt="cart" className="h-6 w-6 mr-1" />
                
            </button>
           
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>

      </div>
             <div className="h-2 bg-white w-full"></div> 
      {/* Bottom Row */}
      <div className="bg-gray-100 p-12  w-full mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-2 border-t">
        {/* Left - Categories */}
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className="border p-2 rounded w-full sm:w-auto focus:outline-none focus:ring focus:border-gray-500  text-gray-400"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>

        {/* Right - Search Bar */}
        <form onSubmit={handleSearch} className="flex   rounded w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2  w-full sm:w-64 md:w-80 lg:w-[990px]   sm:w-64 focus:outline-none focus:ring "
          />
          <button
            type="submit"
            className="bg-gray-400 text-white px-3 py-2  hover:bg-gray-450"
          >
            Search
          </button>
        </form>

      </div>
    </div>
  );
};

export default Navbar;
