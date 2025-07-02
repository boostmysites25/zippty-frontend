import React, { useState } from "react";

const AdminOrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: "#25426",
      product: "Zip Interactive Laser Toy",
      date: "Nov 8th,2023",
      customer: "Kavin",
      status: "Delivered",
      amount: "₹200.00",
      avatar: "K",
    },
    {
      id: "#25425",
      product: "Zip Interactive Laser Toy",
      date: "Nov 7th,2023",
      customer: "Komael",
      status: "Canceled",
      amount: "₹200.00",
      avatar: "K",
    },
    {
      id: "#25424",
      product: "Zip Interactive Laser Toy",
      date: "Nov 6th,2023",
      customer: "Nikhil",
      status: "Delivered",
      amount: "₹200.00",
      avatar: "N",
    },
    {
      id: "#25423",
      product: "Zip Interactive Laser Toy",
      date: "Nov 5th,2023",
      customer: "Shivam",
      status: "Canceled",
      amount: "₹200.00",
      avatar: "S",
    },
    {
      id: "#25422",
      product: "Zip Interactive Laser Toy",
      date: "Nov 4th,2023",
      customer: "Shadab",
      status: "Delivered",
      amount: "₹200.00",
      avatar: "S",
    },
    {
      id: "#25421",
      product: "Zip Interactive Laser Toy",
      date: "Nov 2nd,2023",
      customer: "Yogesh",
      status: "Delivered",
      amount: "₹200.00",
      avatar: "Y",
    },
    {
      id: "#25423",
      product: "Zip Interactive Laser Toy",
      date: "Nov 1st,2023",
      customer: "Sunita",
      status: "Canceled",
      amount: "₹200.00",
      avatar: "S",
    },
    {
      id: "#25421",
      product: "Zip Interactive Laser Toy",
      date: "Nov 1st,2023",
      customer: "Priyanka",
      status: "Delivered",
      amount: "₹200.00",
      avatar: "P",
    },
  ];

  const getStatusColor = (status) => {
    return status === "Delivered" ? "bg-blue-900" : "bg-orange-500";
  };

  const getAvatarBgColor = (name) => {
    const colors = {
      K: "bg-gray-500",
      N: "bg-yellow-700",
      S: "bg-red-800",
      Y: "bg-gray-500",
      P: "bg-gray-500",
    };
    return colors[name.charAt(0)] || "bg-gray-500";
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-black">Orders List</h1>
            <div className="text-sm text-gray-600">Home &gt; Order List</div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="flex items-center mr-4">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="text-sm">Feb 16,2022 - Feb 20,2022</span>
            </div>
            <div className="relative">
              <button className="bg-blue-900 text-white px-4 py-2 rounded flex items-center">
                Change Status
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Purchases */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold">Recent Purchases</h2>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Customer Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`flex-shrink-0 h-8 w-8 rounded-full ${getAvatarBgColor(
                            order.avatar
                          )} flex items-center justify-center text-white`}
                        >
                          {order.avatar}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {order.customer}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full ${getStatusColor(
                            order.status
                          )} mr-2`}
                        ></div>
                        <span className="text-sm text-gray-900">
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-gray-100 px-4 py-3 flex items-center justify-start border-t border-gray-200 sm:px-6">
            <nav className="flex items-center">
              <button className="h-8 w-8 mr-1 flex justify-center items-center rounded bg-black text-white">
                1
              </button>
              <button className="h-8 w-8 mr-1 flex justify-center items-center rounded border border-gray-300">
                2
              </button>
              <button className="h-8 w-8 mr-1 flex justify-center items-center rounded border border-gray-300">
                3
              </button>
              <button className="h-8 w-8 mr-1 flex justify-center items-center rounded border border-gray-300">
                4
              </button>
              <span className="mx-1">...</span>
              <button className="h-8 w-8 mr-1 flex justify-center items-center rounded border border-gray-300">
                10
              </button>
              <button className="h-8 px-3 ml-1 flex justify-center items-center rounded border border-gray-300">
                NEXT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderList;
