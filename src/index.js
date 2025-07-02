import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { WishlistProvider } from "./Store/wishlistContext";
import { CartProvider } from "./Store/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={AppRouter} />
      </WishlistProvider>
    </CartProvider>
    <ToastContainer />
  </React.StrictMode>
);
