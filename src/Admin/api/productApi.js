import axios from "axios";

// export const BASE_API_URL = "https://zippty-backend.vercel.app";
export const BASE_API_URL = "http://localhost:7070";

const getAuthConfig = (isMultipart = false) => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    throw new Error("No admin authentication token found");
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

export const deleteProduct = async (id) => {
  try {
    const config = getAuthConfig();
    const response = await axios.delete(
      `${BASE_API_URL}/api/products/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to delete product"
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

// Get all products with admin features
export const getAllProducts = async (page = 1, limit = 12, search = "", category = "", sortBy = "", sortOrder = "") => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(search && { search }),
      ...(category && { category }),
      ...(sortBy && { sortBy }),
      ...(sortOrder && { sortOrder })
    });
    const response = await axios.get(`${BASE_API_URL}/api/products?${params}`);
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch products"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

// Get product statistics
export const getProductStats = async () => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(`${BASE_API_URL}/api/products/admin/stats`, config);
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch product statistics"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

// Bulk delete products
export const bulkDeleteProducts = async (productIds) => {
  try {
    const config = getAuthConfig();
    const response = await axios.delete(`${BASE_API_URL}/api/products/bulk`, {
      ...config,
      data: { productIds }
    });
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to delete products"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

// Update product stock
export const updateProductStock = async (productId, stock) => {
  try {
    const config = getAuthConfig();
    const response = await axios.patch(
      `${BASE_API_URL}/api/products/${productId}/stock`,
      { stock },
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to update product stock"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};
