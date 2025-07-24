import React from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import signOutImg from "../assets/delete.png";
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
  <div> <h1 className="text-2xl plac-item-center  justify-between font-bold mx-4 ">Shopping Cart</h1> 
    <div className="p-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
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
                  <p className="text-sm text-gray-500">
                    {item.category || "No category"}
                  </p>
                  <p className="text-gray-500 font-bold">${item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-white flex justify-center items-center h-8 w-10 border border-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-white flex justify-center items-center h-8 w-10 border border-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-3 bg-white flex justify-center items-center h-8 w-10 border border-gray-200 rounded hover:bg-gray-300"
                    >
                      <img src={signOutImg} alt="delete" className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Checkout Button */}
            
            
          </>
        )}
      </div>
      <div className="w-full md:w-[300px]">
        <CartSummaryBox />
      </div>
    </div>
  </div>  
  );
};

export default CartPage;
