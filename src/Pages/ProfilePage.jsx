import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaImage } from "react-icons/fa";
import { getUserOrders } from "../api/userapi";

const ProfilePage = () => {
  const [orders, setOrders] = useState([]);

  // Fetch user orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Please log in to view orders");
          return;
        }

        const response = await getUserOrders();
        console.log("Orders response:", response);
        setOrders(response.orders || []);
      } catch (error) {
        toast.error(error.message || "Error fetching orders");
        console.error("Fetch orders error:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Total Amount (₹)</th>
                <th className="py-2 px-4 border-b">Payment Status</th>
                <th className="py-2 px-4 border-b">Order Status</th>
                <th className="py-2 px-4 border-b">Product Images</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="py-2 px-4 border-b">
                    {order.paymentDetails?.razorpay_order_id || order._id}
                  </td>
                  <td className="py-2 px-4 border-b">{order.totalAmount}</td>
                  <td className="py-2 px-4 border-b">{order.paymentStatus}</td>
                  <td className="py-2 px-4 border-b">{order.orderStatus}</td>
                  <td className="py-2 px-4 border-b flex flex-wrap gap-2">
                    {order.products && order.products.length > 0 ? (
                      order.products.map((product, index) => (
                        <div key={index} className="w-16 h-16">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt="Product"
                              className="w-full h-full object-cover rounded"
                              onError={(e) => {
                                e.target.src = "";
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                            />
                          ) : (
                            <FaImage
                              className="w-full h-full text-gray-400"
                              title="No image available"
                            />
                          )}
                        </div>
                      ))
                    ) : (
                      <FaImage
                        className="w-16 h-16 text-gray-400"
                        title="No products"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No orders found.</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
