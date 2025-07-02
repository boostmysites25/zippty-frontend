import axios from "axios";

export const BASE_API_URL = "https://zippybackend.vercel.app";
// export const BASE_API_URL = "http://localhost:7070";

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

export const addProduct = async (formData) => {
  try {
    const config = getAuthConfig(true);
    console.log(formData, "Add product response:");

    const response = await axios.post(
      `${BASE_API_URL}/api/products`,
      formData,
      config
    );
    return response.data;
  } catch (error) {
    if (error) {
      const err = new Error(
        error.response?.data?.message || "Failed to add productsssssss"
      );
      err.response = error.response;
      err.status = error.response?.status;
      throw err;
    }
  }
};

export const updateProduct = async (id, formData) => {
  try {
    const config = getAuthConfig(true);
    const response = await axios.put(
      `${BASE_API_URL}/api/products/${id}`,
      formData,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to update product"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const fetchProduct = async (id) => {
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
