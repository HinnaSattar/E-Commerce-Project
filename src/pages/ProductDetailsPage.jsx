import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import StarRating from "../components/StarRating";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";


const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: products, isLoading, isError } = useProducts();
  const addToCart = useCart((state) => state.addToCart);

  if (isLoading) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  if (isError || !products) {
    return <div className="text-center mt-10 text-red-600">Failed to load products.</div>;
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-10 text-red-600">Product not found.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-4xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6"
      >
        {/* Image left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain rounded-lg max-h-[400px] hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details right */}
        <div className="w-full md:w-1/2  ">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-gray-500">${product.price}</span>
          </div>
          <StarRating rating={product.rating?.rate || 0} />
          <div className="flex">
            <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-gray-400 text-white px-2 py-2 rounded hover:bg-gray-500 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate("/")}
            className="mt-4  bg-gray-400 text-white ml-10 px-2 py-2 rounded  hover:bg-gray-500 transition"
          >
            ← Back to Product List
          </button>

          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
