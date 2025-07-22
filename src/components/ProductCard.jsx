import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const ProductCard = ({ product, onEdit, onDelete, onAddToCart }) => {
  console.log("Product Rating:", product.rating); // Debugging line

  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-2"
      />
      <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>

      {/* Rating Component */}
      <StarRating rating={product.rating?.rate || 0} />

      <p className="text-blue-600 font-bold">${product.price}</p>

      <div className="mt-auto flex gap-2 justify-center">
        <Link
          to={`/product/${product.id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
        >
          View Details
        </Link>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-green-500 text-white px-3 py-1 rounded text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
