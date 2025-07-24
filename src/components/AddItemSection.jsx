// src/components/AddItemSection.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";

import { useProductStore } from "../hooks/useProductStore";

const AddItemSection = () => {
  const addProduct = useProductStore((state) => state.addProduct);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),
      price: parseFloat(formData.price),
      rating: { rate: 0, count: 0 },
    };
    addProduct(newProduct);
    toast.success("Product added successfully!");
    setFormData({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
    setImagePreview(null);
    setShowForm(false);
  };

  return (
    <div className="text-center my-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
      >
        {showForm ? "Close Form" : "Add New Product"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-4 p-4 bg-white shadow rounded grid gap-3"
        >
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
            className="border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded"
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="h-40 object-contain mx-auto"
            />
          )}
          <button
            type="submit"
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Add Product
          </button>
        </form>
      )}
    </div>
  );
};

export default AddItemSection;
