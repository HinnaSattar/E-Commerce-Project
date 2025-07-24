import React from "react";
import { useCart } from "../hooks/useCart";

const CheckoutSummaryBox = () => {
  const cart = useCart((state) => state.cart) || [];

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const shipping = 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;
  

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-md mx-auto sticky top-24">
      <h2 className="text-lg font-bold mb-3 border-b pb-2">Checkout Summary</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className=" max-h-[500px] overflow-y-auto pr-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex  gap-3  pb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="text-sm font-bold">${item.price.toFixed(2)}</p>
              </div>
              
            </div>
          ))}

          {/* Order Summary */}
          <div className="border-t pt-3 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (5%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
           
        </div>
      )}
    </div>
  );
};

export default CheckoutSummaryBox;
