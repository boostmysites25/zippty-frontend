import axios from "axios";
import { BASE_API_URL } from "../util/contant";
import { BiSubdirectoryRight } from "react-icons/bi";

const getAuthConfig = (isMultipart = false) => {
  // const token = localStorage.getItem("token");
  // if (!token) {
  //   throw new Error("No authentication token found");
  // }
  return {
    headers: {
      // Authorization: `Bearer ${token}`,
      ...(isMultipart
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" }),
    },
  };
};
// Fetch products from backend
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/products`);
    return response.data;
  } catch (err) {
  } finally {
  }
};

export const getProductById = async (id) => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(
      `${BASE_API_URL}/api/products/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch product"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
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
