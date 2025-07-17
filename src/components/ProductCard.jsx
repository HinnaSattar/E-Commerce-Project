import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    toast.error("Removed from cart!");
  };

  return (
    <div
      className="border rounded p-4 relative transition-shadow hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-2"
        />
        <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </Link>

      {hovered && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={() => alert("Edit functionality placeholder")}
            className="text-blue-600 hover:text-blue-800"
          >
            <FaEdit />
          </button>
          <button
            onClick={handleRemoveFromCart}
            className="text-red-600 hover:text-red-800"
          >
            <FaTrash />
          </button>
        </div>
      )}

      <button
        onClick={handleAddToCart}
        className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
