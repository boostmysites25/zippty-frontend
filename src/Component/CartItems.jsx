"use client";

import { RxCross2 } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { useCart } from "../Store/cartContext";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import bird from "../assets/images/bird.gif";
import { getCart, removeFromCart } from "../api/cartapi";
import { toast } from "react-toastify";

const CartItems = ({ setOpenCheckOut }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart: removeFromCartContext,
  } = useCart();
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [error, setError] = useState("");

  // Fetch cart items from backend on mount
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await getCart();
        const backendItems = response?.items || [];
        // Map backend items to context format
        console.log(response, backendItems, "asdfsdfsdfsfd");
        const formattedItems = backendItems.map((item) => ({
          id: item.product._id,
          name: item.product.name,
          price: item.product.amount,
          image: item.product.images[0] || "/placeholder.svg",
          quantity: item.quantity,
        }));
        addToCart(formattedItems); // Update context with backend data
      } catch (err) {
        console.error("Error fetching cart:", err);
        setError(err.response?.data?.message || "Failed to load cart");
      }
    };
    fetchCart();
  }, [navigate]);

  const handleRemoveFromCart = async (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      await removeFromCart(productId);
      removeFromCartContext(productId); // Update context
      toast.success("Item removed from cart");
    } catch (err) {
      toast.error("Error removing item:", err);
      console.error("Error removing item:", err);
      setError(err.response?.data?.message || "Failed to remove item");
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
        <BsCart3 size={64} className="text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500">
          Looks like you haven't added any items yet
        </p>
        <div className="flex justify-center mt-6">
          <Link
            to="/shop"
            className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Cart Items</h1>
      {/* Desktop Table Layout */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left px-6 py-4">PRODUCT</th>
              <th className="text-center px-6 py-4">PRICE</th>
              <th className="text-center px-6 py-4">QUANTITY</th>
              <th className="text-center px-6 py-4">TOTAL</th>
              <th className="text-center px-6 py-4">EDIT</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="whitespace-nowrap w-[9rem] truncate">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  ₹{item?.price?.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="border text-center px-6 py-1 rounded-xl">
                    {item.quantity}
                  </div>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  ₹{(item?.price * item?.quantity)?.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-black hover:text-gray-700"
                  >
                    <RxCross2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Layout */}
      <div className="block md:hidden space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <span className="font-semibold">{item.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="font-medium">Price:</span> ₹
                {item?.price?.toFixed(2)}
              </div>
              <div>
                <span className="font-medium">Quantity:</span> {item.quantity}
              </div>
              <div>
                <span className="font-medium">Total:</span> ₹
                {(item?.price * item?.quantity)?.toFixed(2)}
              </div>
              <div className="flex items-center">
                <span className="font-medium">Edit:</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-black hover:text-gray-700 ml-2"
                >
                  <RxCross2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <div className="text-right">
          <div className="text-lg font-semibold mb-4">
            CART TOTAL = ₹{calculateTotal()?.toFixed(2)}
          </div>
          <div className="relative">
            {cartItems.length > 0 && (
              <img
                src={bird}
                alt="Flying Parrot"
                className="absolute w-[5rem] -top-[3rem] -left-[2rem] scale-x-[-1]"
              />
            )}
            <button
              ref={buttonRef}
              onClick={() => setOpenCheckOut(true)}
              className="bg-[#2F5F3A] text-white py-3 px-6 rounded w-full md:w-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
