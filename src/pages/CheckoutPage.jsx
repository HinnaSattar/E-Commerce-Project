import React, { useState } from "react";
import { useCart } from "../hooks/useCart";

import CheckoutSummaryBox from "../components/CheckoutSummaryBox";

const CheckoutPage = () => {
  const cart = useCart((state) => state.cart) || [];
  const clearCart = useCart((state) => state.clearCart);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "COD",
  });

  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!\n\n" +
      `Name: ${shippingDetails.name}\n` +
      `Email: ${shippingDetails.email}\n` +
      `Address: ${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.postalCode}\n` +
      `Payment Method: ${shippingDetails.paymentMethod}`
    );
    clearCart();
  };

  return (
    <div className="p-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
     
      <div className="flex-1 bg-white rounded-lg shadow p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Checkout</h1>

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
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
                type="email"
                name="email"
                placeholder="Email"
                value={shippingDetails.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
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

              {/* ✅ Payment Method Selection */}
              <div className="border p-2 rounded w-full">
                <label className="block font-medium mb-1">Payment Method:</label>
                <select
                  name="paymentMethod"
                  value={shippingDetails.paymentMethod}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                >
                  <option value="COD">Cash on Delivery</option>
                  <option value="Card">Credit/Debit Card</option>
                  <option value="Easypaisa">Easypaisa</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 w-full sticky-b"
              >
                Place Order
              </button>
            </form>
          </>
        )}
      </div>
      <div className="w-full md:w-[300px]">
        <CheckoutSummaryBox />
      </div>
    </div>
  );
};

export default CheckoutPage;
