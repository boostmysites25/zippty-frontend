import axios from "axios";
import { BASE_API_URL } from "./productApi";

const getAuthConfig = () => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    throw new Error("No admin authentication token found");
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

// Admin Authentication
export const adminLogin = async (credentials) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/admin/login`,
      credentials
    );
    if (response.data.status) {
      localStorage.setItem("adminToken", response.data.data.token);
      localStorage.setItem(
        "adminData",
        JSON.stringify(response.data.data.admin)
      );
    }
    return response.data;
  } catch (error) {
    console.log(error);
    const err = new Error(
      error.response?.data?.message || "Admin login failed"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const adminLogout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminData");
};

// Dashboard APIs
export const getDashboardStats = async () => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(
      `${BASE_API_URL}/api/admin/dashboard/stats`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch dashboard stats"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const getRecentOrders = async (limit = 10) => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(
      `${BASE_API_URL}/api/admin/dashboard/recent-orders?limit=${limit}`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch recent orders"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const getSalesAnalytics = async (months = 6) => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(
      `${BASE_API_URL}/api/admin/dashboard/sales-analytics?months=${months}`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch sales analytics"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

// Order Management APIs
export const getAdminOrders = async (page = 1, limit = 10) => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(
      `${BASE_API_URL}/api/orders?page=${page}&limit=${limit}`,
      config
    );
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

export const updateOrderStatus = async (orderId, orderStatus) => {
  try {
    const config = getAuthConfig();
    const response = await axios.patch(
      `${BASE_API_URL}/api/orders/${orderId}/status`,
      { orderStatus },
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to update order status"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

// User Management APIs
export const getAllUsers = async (
  page = 1,
  limit = 10,
  search = "",
  sortBy = "",
  sortOrder = ""
) => {
  try {
    const config = getAuthConfig();
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(search && { search }),
      ...(sortBy && { sortBy }),
      ...(sortOrder && { sortOrder }),
    });
    const response = await axios.get(
      `${BASE_API_URL}/api/admin/users?${params}`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch users"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const getUserById = async (userId) => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(
      `${BASE_API_URL}/api/admin/users/${userId}`,
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

export const updateUserStatus = async (userId, isBlocked) => {
  try {
    const config = getAuthConfig();
    const response = await axios.patch(
      `${BASE_API_URL}/api/admin/users/${userId}/status`,
      { isBlocked },
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to update user status"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const deleteUser = async (userId) => {
  try {
    const config = getAuthConfig();
    const response = await axios.delete(
      `${BASE_API_URL}/api/admin/users/${userId}`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to delete user"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const getUserStats = async () => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(
      `${BASE_API_URL}/api/admin/users/stats`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch user statistics"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

// Admin Profile APIs
export const getAdminProfile = async () => {
  try {
    const config = getAuthConfig();
    const response = await axios.get(
      `${BASE_API_URL}/api/admin/profile`,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to fetch admin profile"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const updateAdminProfile = async (profileData) => {
  try {
    const config = getAuthConfig();
    const response = await axios.put(
      `${BASE_API_URL}/api/admin/profile`,
      profileData,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to update admin profile"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};

export const changeAdminPassword = async (passwordData) => {
  try {
    const config = getAuthConfig();
    const response = await axios.put(
      `${BASE_API_URL}/api/admin/change-password`,
      passwordData,
      config
    );
    return response.data;
  } catch (error) {
    const err = new Error(
      error.response?.data?.message || "Failed to change password"
    );
    err.response = error.response;
    err.status = error.response?.status;
    throw err;
  }
};
