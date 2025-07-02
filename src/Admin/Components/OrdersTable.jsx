import { useState, useEffect } from "react";
import { MoreVertical } from "react-feather";
import { FaImage } from "react-icons/fa";
import { toast } from "react-toastify";
import { getAdminOrders, updateOrderStatus } from "../api/adminapi";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Please log in as admin to view orders");
          return;
        }
        const response = await getAdminOrders();
        console.log("Admin orders response:", response);
        setOrders(response.orders || []);
      } catch (error) {
        toast.error(error.message || "Error fetching orders");
        console.error("Fetch orders error:", error);
      }
    };
    fetchOrders();
  }, []);

  // Handle payment status update
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await updateOrderStatus(orderId, newStatus);
      console.log("Status update response:", response);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, paymentStatus: newStatus } : order
        )
      );
      toast.success("Payment status updated successfully");
    } catch (error) {
      toast.error(error.message || "Error updating payment status");
      console.error("Update status error:", error);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-md p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Recent Orders</h2>
          <button className="text-gray-400">
            <MoreVertical size={16} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-10 py-3 text-left">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary"
                  />
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Images
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Status
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td className="py-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary"
                      />
                    </td>
                    <td className="py-4 text-sm text-gray-900">
                      {order.products && order.products.length > 0
                        ? order.products
                            .map((p) => p.productId?.name || "Unknown Product")
                            .join(", ")
                        : "No Products"}
                    </td>
                    <td className="py-4 text-sm text-gray-900">
                      {order.paymentDetails?.razorpay_order_id || order._id}
                    </td>
                    <td className="py-4 text-sm">
                      <div className="flex flex-wrap gap-2">
                        {order.products && order.products.length > 0 ? (
                          order.products.map((product, index) => (
                            <div key={index} className="w-16 h-16">
                              {product.productId?.image ? (
                                <img
                                  src={product.productId.image}
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
                      </div>
                    </td>
                    <td className="py-4">
                      <select
                        value={order.paymentStatus}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          order.paymentStatus === "paid"
                            ? "bg-green-100 text-green-800"
                            : order.paymentStatus === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="failed">Failed</option>
                      </select>
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          order.orderStatus === "placed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full mr-1 ${
                            order.orderStatus === "placed"
                              ? "bg-green-600"
                              : "bg-yellow-600"
                          }`}
                        ></span>
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-gray-900">
                      ₹{order.totalAmount}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="py-4 text-center text-sm text-gray-500"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
