import { useState, useEffect } from "react";
import { Calendar } from "react-feather";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FiMoreVertical, FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import {
  HiOutlineClipboardList,
  HiOutlineCube,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";

import Chart from "../Components/Chart";
import OrdersTable from "../Components/OrdersTable";
import { getDashboardStats, getRecentOrders, getSalesAnalytics } from "../api/adminapi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminHome = () => {
  const [stats, setStats] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [statsResponse, ordersResponse, salesResponse] = await Promise.all([
          getDashboardStats(),
          getRecentOrders(5),
          getSalesAnalytics(6)
        ]);

        setStats(statsResponse.data);
        setRecentOrders(ordersResponse.data);
        setSalesData(salesResponse.data);
      } catch (err) {
        setError(err.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const getTrendIcon = (percentage) => {
    if (percentage >= 0) {
      return <FiTrendingUp className="w-3 h-3 text-green-500 mr-1" />;
    }
    return <FiTrendingDown className="w-3 h-3 text-red-500 mr-1" />;
  };

  const getTrendColor = (percentage) => {
    return percentage >= 0 ? "text-green-500" : "text-red-500";
  };

  if (loading) {
    return (
      <div className="flex wrapper h-full bg-gray-50">
        <div className="flex w-full flex-col">
          <main className="flex-1 p-4 bg-gray-50">
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex wrapper h-full bg-gray-50">
        <div className="flex w-full flex-col">
          <main className="flex-1 p-4 bg-gray-50">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex wrapper h-full bg-gray-50">
      <div className="flex w-full flex-col">
        <main className="flex-1 p-4 bg-gray-50">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Home &gt; Dashboard</p>
              <div className="flex items-center text-sm bg-white border border-gray-200 rounded-md px-3 py-1">
                <Calendar size={16} className="mr-2 text-gray-500" />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Orders */}
            <div className="bg-white rounded-md p-4 shadow-sm relative">
              <button className="absolute top-2 right-2 text-gray-400">
                <FiMoreVertical size={16} />
              </button>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
                  <HiOutlineClipboardList className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{stats?.orders?.current || 0} Orders</h3>
                  <div className="flex items-center text-xs">
                    {getTrendIcon(stats?.orders?.percentageChange || 0)}
                    <span className={`font-medium ${getTrendColor(stats?.orders?.percentageChange || 0)}`}>
                      {Math.abs(stats?.orders?.percentageChange || 0).toFixed(1)}%
                    </span>
                    <span className="text-gray-500 ml-1">
                      vs previous period
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Products */}
            <div className="bg-white rounded-md p-4 shadow-sm relative">
              <button className="absolute top-2 right-2 text-gray-400">
                <FiMoreVertical size={16} />
              </button>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
                  <HiOutlineCube className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{stats?.products?.current || 0}</h3>
                  <div className="flex items-center text-xs">
                    {getTrendIcon(stats?.products?.percentageChange || 0)}
                    <span className={`font-medium ${getTrendColor(stats?.products?.percentageChange || 0)}`}>
                      {Math.abs(stats?.products?.percentageChange || 0).toFixed(1)}%
                    </span>
                    <span className="text-gray-500 ml-1">
                      vs previous period
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Users */}
            <div className="bg-white rounded-md p-4 shadow-sm relative">
              <button className="absolute top-2 right-2 text-gray-400">
                <FiMoreVertical size={16} />
              </button>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
                  <HiOutlineUserGroup className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{stats?.users?.current || 0}</h3>
                  <div className="flex items-center text-xs">
                    {getTrendIcon(stats?.users?.percentageChange || 0)}
                    <span className={`font-medium ${getTrendColor(stats?.users?.percentageChange || 0)}`}>
                      {Math.abs(stats?.users?.percentageChange || 0).toFixed(1)}%
                    </span>
                    <span className="text-gray-500 ml-1">
                      vs previous period
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Sales */}
            <div className="bg-white rounded-md p-4 shadow-sm relative">
              <button className="absolute top-2 right-2 text-gray-400">
                <FiMoreVertical size={16} />
              </button>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
                  <FaRupeeSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{formatCurrency(stats?.revenue?.current || 0)}</h3>
                  <div className="flex items-center text-xs">
                    {getTrendIcon(stats?.revenue?.percentageChange || 0)}
                    <span className={`font-medium ${getTrendColor(stats?.revenue?.percentageChange || 0)}`}>
                      {Math.abs(stats?.revenue?.percentageChange || 0).toFixed(1)}%
                    </span>
                    <span className="text-gray-500 ml-1">
                      vs previous period
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Graph */}
          <Chart salesData={salesData} />
          {/* Recent Orders */}
          <OrdersTable recentOrders={recentOrders} />
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
