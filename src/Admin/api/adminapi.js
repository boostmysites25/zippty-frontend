import axios from "axios";
import { BASE_API_URL } from "./productApi";

const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

export const getAdminOrders = async () => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(`${BASE_API_URL}/api/orders`, config);
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch orders"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const updateOrderStatus = async (orderId, paymentStatus) => {
  try {
    const config = getAuthConfig();
    const response = await axios.put(
      `${BASE_API_URL}/api/orders/${orderId}/status`,
      { paymentStatus },
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to update payment status"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};
