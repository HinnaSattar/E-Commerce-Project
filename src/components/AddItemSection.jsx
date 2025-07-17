import React, { useState } from "react";
import { useAddedProducts } from "../hooks/useAddedProducts";
import toast from "react-hot-toast";

const AddItemSection = () => {
  const addProduct = useAddedProducts((state) => state.addProduct);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(), // simple unique id
      price: parseFloat(formData.price),
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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 bg-white shadow rounded grid gap-3">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Add Product
          </button>
        </form>
      )}
    </div>
  );
};

export default AddItemSection;
