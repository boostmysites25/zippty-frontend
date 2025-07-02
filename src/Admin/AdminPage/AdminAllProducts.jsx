import { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../api/productApi";

const AdminAllProducts = () => {
  // State for products, pagination, loading, error, and popup
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [popup, setPopup] = useState({
    visible: false,
    productId: null,
    x: 0,
    y: 0,
  });
  const popupRef = useRef(null);
  const productsPerPage = 12;

  // Handle click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup({ visible: false, productId: null, x: 0, y: 0 });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch products from backend
  const fetchProducts = async (page = 1) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${BASE_API_URL}/api/products`);
      setProducts(response.data.products || []);
      setTotalPages(Math.ceil(response.data.total / productsPerPage) || 1);
      setCurrentPage(page);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${BASE_API_URL}/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete product");
    }
    setPopup({ visible: false, productId: null, x: 0, y: 0 });
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  // Handle pagination
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle three-dot click
  const handleThreeDotClick = (productId, event) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    setPopup({
      visible: true,
      productId,
      x: rect.left,
      y: rect.bottom + window.scrollY,
    });
  };

  // Render pagination buttons
  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 4;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`w-8 h-8 flex items-center justify-center rounded-md mr-2 ${
            currentPage === i ? "bg-black text-white" : "border border-gray-300"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center mt-8">
        {startPage > 1 && (
          <>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-md mr-2 border border-gray-300"
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            {startPage > 2 && (
              <span className="mx-2 flex items-center">...</span>
            )}
          </>
        )}
        {pages}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="mx-2 flex items-center">...</span>
            )}
            <button
              className="w-8 h-8 flex items-center justify-center rounded-md mr-2 border border-gray-300"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          className="px-4 h-8 flex items-center justify-center rounded-md border border-gray-300"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          NEXT
        </button>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb and Add button */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600">
          <span className="cursor-pointer hover:text-gray-800">Home</span> >{" "}
          <span className="cursor-pointer hover:text-gray-800">
            All Products
          </span>
        </div>
        <Link
          to="/admin/add-product"
          className="bg-primary text-white px-4 py-2 rounded-md flex items-center"
        >
          <span className="mr-2">+</span> ADD NEW PRODUCT
        </Link>
      </div>

      {/* Error and Loading States */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {loading && <div className="text-gray-600 mb-4">Loading products...</div>}

      {/* Product grid */}
      {!loading && products.length === 0 && !error && (
        <div className="text-gray-600">No products found.</div>
      )}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/admin/edit-product/${product._id}`}
              className="bg-gray-100 group rounded-lg overflow-hidden p-4 relative"
            >
              <div className="relative">
                <div className="flex flex-col gap-2">
                  <img
                    src={product.images[0] || "https://via.placeholder.com/150"}
                    alt={product.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium group-hover:text-blue-600 line-clamp-3">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.category || "Entertainment Toys"}
                    </p>
                    <p className="font-bold mb-3">₹{product.price || "2500"}</p>
                  </div>
                </div>

                {/* <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                  onClick={(e) => handleThreeDotClick(product._id, e)}
                >
                  <BsThreeDotsVertical />
                </button> */}
              </div>

              {/* Popup Menu */}
              {/* {popup.visible && popup.productId === product._id && (
                <div
                  ref={popupRef}
                  className="absolute z-50 bg-black border border-gray-300 rounded-md shadow-lg"
                  style={{ top: `${popup.y}px`, left: `${popup.x}px` }}
                >
                  <div className="flex flex-col">
                    <Link
                      to={`/admin/edit-product/${product._id}`}
                      className="px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Edit
                    </Link>
                    <button
                      className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="px-4 py-2 text-sm hover:bg-gray-100 text-left"
                      onClick={() =>
                        setPopup({
                          visible: false,
                          productId: null,
                          x: 0,
                          y: 0,
                        })
                      }
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )} */}

              <div className="pt-2">
                <div className="mb-4">
                  <h4 className="font-medium mb-1">Summary</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-4">
                    {product.description ||
                      "This is a placeholder description for the product."}
                  </p>

                  {/* <div className="border p-3 flex flex-col gap-3 rounded-xl border-gray-400">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Sales</span>
                        <span className="flex gap-1 items-center text-amber-500">
                          <FaArrowUp />
                          {product.sales || 0}
                        </span>
                      </div>
                    </div>
                    <hr className="text-gray-300 border border-gray-300" />
                    <div className="grid grid-cols-2 items-center w-full">
                      <div className="flex justify-between text-sm">
                        Remaining Products
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-full max-w-[5rem] bg-primary rounded-full h-1.5">
                          <div
                            className="bg-amber-500 h-1.5 rounded-full"
                            style={{
                              width: `${
                                ((product.remaining || 0) /
                                  (product.totalStock || 100)) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <div>{product.remaining || 0}</div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && renderPagination()}
    </div>
  );
};

export default AdminAllProducts;
