import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../util/contant";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_API_URL}/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/"); // Redirect to home or previous page
      toast.success("Login successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Login
          </button>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
