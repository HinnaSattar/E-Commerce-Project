import React from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import CartSummaryBox from "../components/CartSummaryBox";

const CartPage = () => {
  const cart = useCart((state) => state.cart) || [];
  const removeFromCart = useCart((state) => state.removeFromCart);
  const clearCart = useCart((state) => state.clearCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="p-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
      {/* ✅ Left: Cart List */}
      <div className="flex-1 bg-white rounded-lg shadow p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b py-3 gap-4"
              >
                {/* Product Image */}
                <div className="flex-shrink-0 w-full sm:w-24 h-24 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-grow sm:ml-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-500 font-bold">${item.price}</p>
                  <StarRating rating={item.rating?.rate || 0} />

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <div className="flex justify-end sm:justify-center sm:items-center mt-2 sm:mt-0">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Checkout Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleCheckout}
                className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* ✅ Right: Summary Box */}
      <div className="w-full md:w-[300px]">
        <CartSummaryBox />
      </div>
    </div>
  );
};

export default CartPage;
