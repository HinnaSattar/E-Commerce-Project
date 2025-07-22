// src/components/CartSummaryBox.jsx

import React from "react";
import { useCart } from "../hooks/useCart";

const CartSummaryBox = () => {
  const cart = useCart((state) => state.cart) || [];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm sticky top-24">
      <h2 className="text-lg font-bold mb-3 border-b pb-2">Order Summary</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-2 border-b pb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                <p className=" font-bold text-gray-500 ">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
          <div className="font-bold flex justify-between border-t pt-2">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummaryBox;
