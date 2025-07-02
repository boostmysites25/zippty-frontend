import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ContactusPage from "./Pages/ContactusPage";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import WishlistPage from "./Pages/WishlistPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import TermsConditionsPage from "./Pages/TermsConditionsPage";
import CancellationRefundPage from "./Pages/CancellationRefundPage";
import ShippingDeliveryPage from "./Pages/ShippingDeliveryPage";
import { AdminLayout } from "./Admin/AdminLayout/AdminLayout";
import AdminHome from "./Admin/AdminPage/AdminHome";
import AdminAllProducts from "./Admin/AdminPage/AdminAllProducts";
import AdminOrderList from "./Admin/AdminPage/AdminOrderList";
import AdminOrderDetails from "./Admin/AdminPage/AdminOrderDetails";
import AdminAddProduct from "./Admin/AdminPage/AdminAddProduct";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProfilePage from "./Pages/ProfilePage";
import BlogDetails from "./Pages/BlogDetails";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/contact-us", element: <ContactusPage /> },
      { path: "/cartitems", element: <CartPage /> },
      { path: "/shop", element: <ProductPage /> },
      { path: "/blog/:id", element: <BlogDetails /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "/terms-conditions", element: <TermsConditionsPage /> },
      { path: "/cancellation-refund", element: <CancellationRefundPage /> },
      { path: "/shipping-delivery", element: <ShippingDeliveryPage /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminHome /> },
      { path: "/admin/all-products", element: <AdminAllProducts /> },
      { path: "/admin/order-list", element: <AdminOrderList /> },
      { path: "/admin/order-details/:id", element: <AdminOrderDetails /> },
      { path: "/admin/add-product", element: <AdminAddProduct /> },
      { path: "/admin/edit-product/:id", element: <AdminAddProduct /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

export default AppRouter;
