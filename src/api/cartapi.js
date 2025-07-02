import axios from "axios";
import { BASE_API_URL } from "../util/contant";
const getAuthConfig = (isMultipart = false) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authentication token found");
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ...(isMultipart
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" }),
    },
  };
};

export const addToCart = async (productId, quantity) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${BASE_API_URL}/api/cart/add`,
    { productId, quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getCart = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${BASE_API_URL}/api/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response, "asdfsdfsdfsfd");

  return response.data;
};

export const removeFromCart = async (productId) => {
  const token = localStorage.getItem("token");
  const response = await axios.delete(
    `${BASE_API_URL}/api/cart/remove/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const clearCartapi = async (id) => {
  try {
    const response = await axios.delete(
      `${BASE_API_URL}/api/cart/clear`,
      getAuthConfig()
    );
    return response.data;
  } catch (err) {
    console.error("Error clearing cart:", err);
    throw new Error(err.response?.data?.message || "Failed to clear cart");
  }
};
