import { BASE_API_URL } from "../util/contant";
import axios from "axios";

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

export const getUserDetails = async () => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(`${BASE_API_URL}/api/user`, config);
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch user details"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};
export const addAddress = async (newAddress) => {
  try {
    const config = getAuthConfig();
    const response = await axios.post(
      `${BASE_API_URL}/api/user/address`,
      newAddress,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch user details"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};
export const placeorder = async ({ addressId, cartItems }) => {
  try {
    const config = getAuthConfig();
    const response = await axios.post(
      `${BASE_API_URL}/api/user/order`,
      { addressId, cartItems },
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to place order"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};
export const verifyorder = async (xx) => {
  try {
    const config = getAuthConfig();
    const response = await axios.post(
      `${BASE_API_URL}/api/user/order/verify`,
      xx,
      config
    );

    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to place order"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const getUserOrders = async () => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(`${BASE_API_URL}/api/user/orders`, config);
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
