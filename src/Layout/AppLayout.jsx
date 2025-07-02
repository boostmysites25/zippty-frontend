import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../Component /ScrollToTop";

const AppLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="pt-[60px] md:pt-[116px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
