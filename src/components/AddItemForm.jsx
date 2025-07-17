// src/components/AddItemForm.jsx
import React, { useState } from "react";

const AddItemForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      price: parseFloat(price),
      description,
      image,
      category,
    };
    onAdd(newProduct);
    setTitle("");
    setPrice("");
    setDescription("");
    setImage("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition w-full">
        Add Product
      </button>
    </form>
  );
};

export default AddItemForm;
