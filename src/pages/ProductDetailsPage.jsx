import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/apiService";
import { useCart } from "../hooks/useCart";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const addToCartStore = useCart((state) => state.addToCart);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading product...</div>;
  if (!product) return <div className="text-center mt-10 text-red-600">Product not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img src={product.image} alt={product.title} className="h-80 mx-auto object-contain mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>
      <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
      <button
        onClick={() => addToCartStore(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailsPage;
