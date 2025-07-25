import React from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

const CartSummaryBox = () => {
  const cart = useCart((state) => state.cart) || [];

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 10 : 0; // $10 fixed shipping if cart has items
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;
  const navigate = useNavigate();
  
    const handleCheckout = () => {
      navigate("/checkout");
    };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm sticky top-24">
      <h2 className="text-lg font-bold mb-3 border-b pb-2">Order Summary</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-2">
          <div className="flex justify-between  pb-1">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between  pb-1">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pb-1">
            <span>Tax (10%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t mt-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
           {/* Checkout Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleCheckout}
                className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
              >
                Checkout
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default CartSummaryBox;
