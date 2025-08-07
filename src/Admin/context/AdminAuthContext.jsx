import React, { createContext, useContext, useState, useEffect } from 'react';
import { adminLogin, adminLogout, getAdminProfile } from '../api/adminapi';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const adminToken = localStorage.getItem('adminToken');
        const adminData = localStorage.getItem('adminData');

        if (adminToken && adminData) {
          // Verify token by fetching admin profile
          const response = await getAdminProfile();
          if (response.status) {
            setAdmin(response.data);
          } else {
            // Token is invalid, clear storage
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminData');
          }
        }
      } catch (error) {
        // Token is invalid or expired, clear storage
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminData');
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminLogin(credentials);
      if (response.status) {
        setAdmin(response.data.admin);
        return { success: true };
      }
      return { success: false, message: response.message };
    } catch (error) {
      setError(error.message);
      return { success: false, message: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    adminLogout();
    setAdmin(null);
    setError(null);
  };

  const value = {
    admin,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!admin,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
