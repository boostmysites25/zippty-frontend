import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";
import AdminFooter from "./AdminFooter";

export const AdminLayout = () => {
  return (
    <div className="w-full h-full flex max-w-screen">
      <div className="fixed h-screen left-0">
        <SideBar />
      </div>
      <div className="overflow-y-scroll max-w-screen  w-full px-5 h-full md:ml-[256px]">
        <AdminHeader />
        <Outlet />
        <AdminFooter />
      </div>
    </div>
  );
};
