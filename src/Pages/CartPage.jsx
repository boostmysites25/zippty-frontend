import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cartpagepetsimage from "../assets/images/cartpagepetsimage.png";
import Banner from "../Component /Banner";
import CartItems from "../Component /CartItems";
import {
  addAddress,
  getUserDetails,
  placeorder,
  verifyorder,
} from "../api/userapi";
import { useCart } from "../Store/cartContext";

const CartPage = () => {
  const [openCheckOut, setOpenCheckOut] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile: "",
    address: "",
    area: "",
    city: "",
    zip: "",
    state: "",
    defaultAddress: false,
  });
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const homeBannerDetails = {
    mainHeading: "Check Out",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog,`,
    image: cartpagepetsimage,
    isHome: true,
  };

  // Fetch user details
  useEffect(() => {
    if (openCheckOut) {
      const fetchUserDetails = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            toast.error("Please log in to proceed");
            setOpenCheckOut(false);
            return;
          }

          const response = await getUserDetails();
          console.log("User details response:", response);
          const data = response || {};
          setUserDetails(data);
          if (data.addresses && data.addresses.length > 0) {
            setSelectedAddress(
              data.addresses.find((addr) => addr.defaultAddress) ||
                data.addresses[0]
            );
          }
        } catch (error) {
          toast.error("Error fetching user details");
          console.error("Fetch user error:", error);
        }
      };
      fetchUserDetails();
    }
  }, [openCheckOut]);

  // Handle address form input changes
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Add new address
  const handleAddAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await addAddress(newAddress);
      const updatedUser = response;
      console.log("Add address response:", updatedUser);
      setUserDetails(updatedUser);
      setSelectedAddress(
        updatedUser.addresses.find((addr) => addr.defaultAddress) ||
          updatedUser.addresses[updatedUser.addresses.length - 1]
      );
      setNewAddress({
        name: "",
        mobile: "",
        address: "",
        area: "",
        city: "",
        zip: "",
        state: "",
        defaultAddress: false,
      });
      toast.success("Address added successfully");
    } catch (error) {
      toast.error("Error adding address");
      console.error("Add address error:", error);
    }
  };

  // Handle Razorpay payment
  const handlePayment = async () => {
    if (!selectedAddress) {
      toast.error("Please select or add an address");
      return;
    }
    if (!cartItems || cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    try {
      // Create order on backend
      const orderResponse = await placeorder({
        addressId: selectedAddress._id,
        cartItems,
      });
      const { orderId, amount } = orderResponse;
      console.log("Order response:", orderResponse);
      // Initialize Razorpay
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "Zippty",
        description: "Pet Store Order",
        order_id: orderId,
        handler: async (response) => {
          try {
            // Verify payment on backend
            const verifyResponse = await verifyorder(response);
            console.log("Payment verification response:", verifyResponse);

            clearCart();

            toast.success("Order placed successfully!");
            setTimeout(() => navigate("/"), 2000); // Redirect to homepage
          } catch (error) {
            toast.error("Payment verification failed");
            console.error("Payment verification error:", error);
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error("Error initiating payment");
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Banner bannerDetails={homeBannerDetails} />
      <CartItems setOpenCheckOut={setOpenCheckOut} />
      {openCheckOut && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          {userDetails ? (
            <div>
              {userDetails.addresses && userDetails.addresses.length > 0 ? (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Select Address</h3>
                  <select
                    className="w-full p-2 border rounded"
                    value={selectedAddress?._id || ""}
                    onChange={(e) =>
                      setSelectedAddress(
                        userDetails.addresses.find(
                          (addr) => addr._id === e.target.value
                        )
                      )
                    }
                  >
                    <option value="">Select an address</option>
                    {userDetails.addresses.map((addr) => (
                      <option key={addr._id} value={addr._id}>
                        {`${addr.name}, ${addr.address}, ${addr.area}, ${
                          addr.city
                        }, ${addr.state}, ${addr.zip}${
                          addr.defaultAddress ? " (Default)" : ""
                        }`}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Add New Address</h3>
                  <form onSubmit={handleAddAddress} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={newAddress.name}
                      onChange={handleAddressChange}
                      placeholder="Full Name"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="mobile"
                      value={newAddress.mobile}
                      onChange={handleAddressChange}
                      placeholder="Mobile Number"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="address"
                      value={newAddress.address}
                      onChange={handleAddressChange}
                      placeholder="Street Address"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="area"
                      value={newAddress.area}
                      onChange={handleAddressChange}
                      placeholder="Area"
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="text"
                      name="city"
                      value={newAddress.city}
                      onChange={handleAddressChange}
                      placeholder="City"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="zip"
                      value={newAddress.zip}
                      onChange={handleAddressChange}
                      placeholder="Zip Code"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      value={newAddress.state}
                      onChange={handleAddressChange}
                      placeholder="State"
                      className="w-full p-2 border rounded"
                      required
                    />
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="defaultAddress"
                        checked={newAddress.defaultAddress}
                        onChange={(e) =>
                          setNewAddress((prev) => ({
                            ...prev,
                            defaultAddress: e.target.checked,
                          }))
                        }
                        className="mr-2"
                      />
                      Set as Default Address
                    </label>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Add Address
                    </button>
                  </form>
                </div>
              )}
              <button
                onClick={handlePayment}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                disabled={!selectedAddress}
              >
                Pay Now
              </button>
            </div>
          ) : (
            <p>Loading user details...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
