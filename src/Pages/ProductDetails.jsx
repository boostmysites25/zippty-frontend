import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../Store/cartContext";

import productdetailspetsimage from "../assets/images/productdetailspetsimage.png";
import { addToCart, fetchProducts, getProductById } from "../api/productapi";
import Banner from "../Component /Banner";
import ProductGrid from "../Component /ProductGrid";
import TwoDogs from "../Component /TwoDogs";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart: addToCartContext, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [error, setError] = useState("");

  // Fetch product details and related products
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product by ID
        const productResponse = await getProductById(id);
        const fetchedProduct = productResponse.product;
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.images[0] || "");

        // Fetch related products
        const productsResponse = await fetchProducts({ page: 1, limit: 4 });
        setRelatedProducts(
          productsResponse.products.filter((p) => p._id !== id)
        );
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(
          err.response?.data?.message || "Failed to load product details"
        );
      }
    };
    fetchData();
  }, [id]);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = async () => {
    if (!product) return;

    // Check if user is logged in (assumes token is stored in localStorage)
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      // Call backend API to add to cart
      const response = await addToCart(product._id, quantity);
      // Update cart context with the response
      addToCartContext({
        id: product._id,
        name: product.name,
        price: product.amount,
        image: product.images[0],
        quantity: quantity,
      });
      toast.success("Product added to cart successfully!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      toast.error(
        err.response?.data?.message || "Failed to add product to cart"
      );
    }
  };

  const isInCart = cartItems.some((item) => item.id === product?._id);

  const aboutBannerDetails = {
    mainHeading: "The friendly and caring small pet store",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog,`,
    image: productdetailspetsimage,
  };

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (!product) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div>
      <Banner bannerDetails={aboutBannerDetails} />
      <div className="wrapper gap-8">
        <div className="flex-1 md:col-span-3">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full rounded-lg object-contain"
              />
              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto thin-scrollbar">
                {product.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className={`w-20 h-20 rounded-lg cursor-pointer border ${
                      selectedImage === img ? "border-black" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h1 className="small-heading">{product.name}</h1>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">₹{product.amount}</span>
                <span className="text-sm text-gray-500">(Incl. GST) </span>
              </div>
              <div className="flex items-center gap-1">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-400">
                    {star}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">{product.description}</p>

              {/* Quantity and Cart Buttons */}
              <div className="flex items-center gap-4">
                {!isInCart ? (
                  <>
                    <div className="flex items-center border rounded">
                      <button
                        onClick={decreaseQuantity}
                        className="px-3 py-1 border-r hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4">{quantity}</span>
                      <button
                        onClick={increaseQuantity}
                        className="px-3 py-1 border-l hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="bg-black text-white px-6 py-2 rounded flex items-center gap-2"
                    >
                      <span>Add To Cart</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/cartitems"
                    className="bg-green-600 text-white px-6 py-2 rounded flex items-center gap-2"
                  >
                    <span>Go to Cart</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 paddingTop paddingBottom">
            <div className="space-y-4">
              <h3 className="small-heading">Additional Information</h3>
              <div className="grid grid-cols-1 gap-4 text-sm">
                {product.headings.map((heading, index) => (
                  <div key={index} className="grid grid-cols-2">
                    <p className="font-bold">{heading.title}</p>
                    <p>{heading.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Product images ${i + 1}`}
                className="rounded-3xl cursor-pointer object-contain"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <ProductGrid products={relatedProducts} />
      </div>
      <TwoDogs />
    </div>
  );
};

export default ProductDetails;
