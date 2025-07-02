import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiHome, FiPackage, FiClipboard } from "react-icons/fi";
import logo from "../../assets/images/logo/logo.png";

const SideBar = () => {
  const { pathname } = useLocation();
  const links = [
    { path: "/admin", label: "DASHBOARD", icon: <FiHome size={18} /> },
    {
      path: "/admin/all-products",
      label: "ALL PRODUCTS",
      icon: <FiPackage size={20} />,
    },
    {
      path: "/admin/order-list",
      label: "ORDER LIST",
      icon: <FiClipboard size={20} />,
    },
  ];

  return (
    <div>
      <div className="w-64 bg-white border-r border-gray-200 hidden md:block h-screen">
        <div className="text-2xl font-bold p-4 mx-auto w-fit">
          <img src={logo} alt="logo" className="w-[4.5rem] sm:w-[6rem]" />
        </div>

        <div className="p-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`p-3 mb-2 flex items-center rounded-md ${
                pathname === link.path
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
            >
              <div className="mr-2">{link.icon}</div>
              <span>{link.label}</span>
            </Link>
          ))}
          <div className="text-gray-700 p-3 mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <span>Categories</span>
            </div>
            <FiChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
