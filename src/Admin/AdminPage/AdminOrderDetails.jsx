import React, { useState } from "react";
import { FaCalendarAlt, FaChevronDown, FaCommentAlt } from "react-icons/fa";
import productimage from "../../assets/images/products/wireless-remote-control.jpeg";

const AdminOrderDetails = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const products = [
    {
      id: 1,
      name: "Zip Interactive Laser Toy",
      orderId: "#25421",
      quantity: 2,
      total: "₹800.40",
    },
    {
      id: 2,
      name: "Zip Interactive Laser Toy",
      orderId: "#25421",
      quantity: 2,
      total: "₹800.40",
    },
    {
      id: 3,
      name: "Zip Interactive Laser Toy",
      orderId: "#25421",
      quantity: 2,
      total: "₹800.40",
    },
    {
      id: 4,
      name: "Zip Interactive Laser Toy",
      orderId: "#25421",
      quantity: 2,
      total: "₹800.40",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-0">
          <div>
            <h1 className="text-lg font-bold">Orders ID: #6743</h1>
            <span className="inline-block bg-orange-300 text-white text-xs px-2 py-1 rounded-md">
              Pending
            </span>
          </div>
          <div className="flex items-center text-sm mt-2 md:mt-0">
            <FaCalendarAlt className="mr-2 text-gray-500" />
            <span>Feb 16,2022 - Feb 20,2022</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-between bg-indigo-900 text-white px-4 py-2 rounded">
            <span>Change Status</span>
            <FaChevronDown className="ml-2" />
          </button>
          <button className="bg-black text-white p-2 rounded">
            <FaCommentAlt />
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>

      {/* Customer Info Section */}
      <div className="bg-gray-100 p-4 rounded-md mb-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p className="font-bold mb-1">Full Name: Shristi Singh</p>
            <p className="mb-1">Email: shristi@gmail.com</p>
            <p className="mb-3">Phone: +91 904 231 1212</p>
            <button className="bg-indigo-900 text-white px-4 py-1 rounded text-sm">
              View profile
            </button>
          </div>
          <div>
            <p className="font-bold mb-1">Address: Dharam Colony,</p>
            <p>Palam Vihar, Gurgaon,</p>
            <p>Haryana</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Products</h2>
          <button className="text-gray-500">⋮</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Product Name</th>
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3"
                        checked={selectedItems.includes(product.id)}
                        onChange={() => toggleSelectItem(product.id)}
                      />
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded mr-3 overflow-hidden">
                          <img
                            src={productimage}
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>{product.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">{product.orderId}</td>
                  <td className="py-3 px-4">{product.quantity}</td>
                  <td className="py-3 px-4 text-right">{product.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="flex justify-end">
        <div className="w-full md:w-1/3">
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>₹3,201.6</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Tax (20%)</span>
            <span>₹640.32</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Discount</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Sipping Rate</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between py-2 font-bold text-lg">
            <span>Total</span>
            <span>₹3841.92</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
