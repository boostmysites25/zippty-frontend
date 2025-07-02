import React, { useState } from "react";
import { Bell, ChevronDown, Search } from "react-feather";
import { FiHome, FiPackage, FiClipboard } from "react-icons/fi";
import logo from "../../assets/images/logo/logo.png";

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

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
        <div className="md:hidden">
          <div className="text-2xl font-bold p-4 mx-auto w-fit">
            <img src={logo} alt="logo" className="w-[4.5rem] sm:w-[6rem]" />
          </div>
        </div>
        <div className="flex items-center ml-auto relative">
          <button className="p-2 text-gray-500 focus:outline-none">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-500 focus:outline-none">
            <Bell size={20} />
          </button>
          <div className="ml-2 hidden md:flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none">
            ADMIN
          </div>
          <button
            className="ml-2 flex md:hidden items-center px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none"
            onClick={togglePopover}
          >
            <span>ADMIN</span>
            <ChevronDown size={16} className="ml-1" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-[10rem] w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default AdminHeader;
