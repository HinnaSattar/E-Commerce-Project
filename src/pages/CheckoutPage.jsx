import React, { useState } from "react";
import { useCart } from "../hooks/useCart";

const CheckoutPage = () => {
  const cart = useCart((state) => state.cart) || [];
  const clearCart = useCart((state) => state.clearCart);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="border-b py-2 flex justify-between">
                <span>{item.title} x {item.quantity}</span>
                <span className="text-gray-400">${item.price}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={shippingDetails.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingDetails.address}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingDetails.city}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingDetails.postalCode}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <button
              type="submit"
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 w-full"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
