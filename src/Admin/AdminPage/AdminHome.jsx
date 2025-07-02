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
import { FiMoreVertical, FiTrendingUp } from "react-icons/fi";
import {
  HiOutlineClipboardList,
  HiOutlineCube,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";

import Chart from "../Components/Chart";
import OrdersTable from "../Components/OrdersTable";

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
  return (
    <div className="flex wrapper h-full bg-gray-50">
      {/* Main Content */}
      {/* <SideBar /> */}
      <div className="flex w-full  flex-col ">
        {/* Top Navigation */}

        {/* Dashboard Content */}
        <main className="flex-1  p-4 bg-gray-50 ">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Home &gt; Dashboard</p>
              <div className="flex items-center text-sm bg-white border border-gray-200 rounded-md px-3 py-1">
                <Calendar size={16} className="mr-2 text-gray-500" />
                <span>Oct 11,2023 - Nov 11,2022</span>
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
                  <h3 className="text-lg font-bold">26 Orders</h3>
                  <div className="flex items-center text-xs">
                    <FiTrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-green-500 font-medium">34.7%</span>
                    <span className="text-gray-500 ml-1">
                      Compared to Oct 2023
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
                  <h3 className="text-lg font-bold">15,251</h3>
                  <div className="flex items-center text-xs">
                    <FiTrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-green-500 font-medium">56.7%</span>
                    <span className="text-gray-500 ml-1">
                      Compared to Oct 2024
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
                  <h3 className="text-lg font-bold">623</h3>
                  <div className="flex items-center text-xs">
                    <FiTrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-green-500 font-medium">34.7%</span>
                    <span className="text-gray-500 ml-1">
                      Compared to Oct 2024
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
                  <h3 className="text-lg font-bold">₹1,26,826.52</h3>
                  <div className="flex items-center text-xs">
                    <FiTrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-green-500 font-medium">34.7%</span>
                    <span className="text-gray-500 ml-1">
                      Compared to Oct 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Graph */}
          <Chart />
          {/* Recent Orders */}
          <OrdersTable />
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
