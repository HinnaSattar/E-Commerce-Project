import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import EditProductModal from "./EditProductModal";

const ProductList = ({ products }) => {
  const addToCart = useCart((state) => state.addToCart);

  const [editProduct, setEditProduct] = useState(null);

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = (updatedProduct) => {
    console.log("Updated Product: ", updatedProduct);
    // Future: Update product in zustand or backend here
  };

  const handleDelete = (productId) => {
    alert(`Delete Product ID: ${productId}`);
    // Future: Delete logic
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded p-4 shadow hover:shadow-lg transition relative flex flex-col justify-between group"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-48 mx-auto object-contain"
          />
          <h2 className="text-lg font-semibold mt-2 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-gray-400 font-bold">${product.price}</p>

          <div className="flex justify-center gap-4 mt-4 ">
            <Link
              to={`/product/${product.id}`}
              className="bg-gray-400 px-3 py-2 rounded shadow text-white text-center py-1 rounded hover:bg-gray-500"
            >
              View Details
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="bg-gray-400 px-3 py-2 rounded shadow text-white py-1 rounded hover:bg-gray-500"
            >
              Add to Cart
            </button>
          </div>

          {/* Hover edit & delete icons */}
          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
            <PencilSquareIcon
              className="h-5 w-5 text-blue-600 cursor-pointer hover:text-blue-800"
              onClick={() => handleEdit(product)}
              title="Edit"
            />
            <TrashIcon
              className="h-5 w-5 text-red-600 cursor-pointer hover:text-red-800"
              onClick={() => handleDelete(product.id)}
              title="Delete"
            />
          </div>
        </div>
      ))}

      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default ProductList;
