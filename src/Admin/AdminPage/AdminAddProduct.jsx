import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import {
  addProduct,
  BASE_API_URL,
  fetchProduct,
  updateProduct,
} from "../api/productApi";

const AdminAddProduct = () => {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: isEditMode
        ? ""
        : "BABORUI 3.0 Upgraded Interactive Cat Toy with 2-Speed Adjustment, Remote Control, Automatic, Orange",
      description: "",
      amount: "",
      headings: [{ title: "", description: "" }],
      about: [],
      images: [],
    },
  });

  const {
    fields: headingFields,
    append: appendHeading,
    remove: removeHeading,
    replace: replaceHeadings,
  } = useFieldArray({
    control,
    name: "headings",
  });

  const {
    fields: aboutFields,
    append: appendAbout,
    remove: removeAbout,
    replace: replaceAbout,
  } = useFieldArray({
    control,
    name: "about",
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    if (isEditMode) {
      fetchProduct(id)
        .then((data) => {
          const product = data.product;
          setValue("name", product.name || "");
          setValue("description", product.description || "");
          setValue("amount", product.amount || product.price || "");
          if (product.headings && product.headings.length > 0) {
            replaceHeadings(product.headings);
          } else {
            replaceHeadings([{ title: "", description: "" }]);
          }
          if (product.about && product.about.length > 0) {
            replaceAbout(product.about);
          } else {
            replaceAbout([]);
          }
          if (product.images && product.images.length > 0) {
            setImagePreviews(product.images);
            setValue("images", product.images);
          }
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setError(err.message || "Failed to fetch product details");
        });
    }
  }, [id, isEditMode, setValue, replaceHeadings, replaceAbout]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 8) {
      setError("Maximum 8 images allowed");
      return;
    }
    if (files.length === 0) {
      setImagePreviews([]);
      setImageFiles([]);
      return;
    }
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
    setImageFiles(files);
  };

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description || "");
      formData.append("amount", data.amount);
      data.headings.forEach((heading, index) => {
        formData.append(`headings[${index}][title]`, heading.title);
        formData.append(`headings[${index}][description]`, heading.description);
      });
      data.about.forEach((point, index) => {
        formData.append(`about[${index}]`, point);
      });

      // Append images
      if (imageFiles.length === 0 && !isEditMode) {
        throw new Error("At least one image is required");
      }
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      // Log FormData contents for debugging
      console.log("Frontend FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value instanceof File ? value.name : value}`);
      }

      if (isEditMode) {
        await updateProduct(id, formData);
        setSuccess("Product updated successfully");
      } else {
        const response = await addProduct(formData);
        console.log("Add product response:", response);
        setSuccess("Product added successfully");
      }
      setTimeout(() => navigate("/admin/all-products"), 2000);
    } catch (err) {
      console.error("Submission error:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
      });
      setError(
        err.response?.data?.message || err.message || "Failed to submit product"
      );
    }
  };

  const handleCancel = () => {
    navigate("/admin/all-products");
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    setError("");
    setSuccess("");
    try {
      await axios.delete(`${BASE_API_URL}/api/products/${id}`);
      setSuccess("Product deleted successfully");
      setTimeout(() => navigate("/admin/all-products"), 2000);
    } catch (err) {
      console.error("Delete error:", err);
      setError(err.response?.data?.message || "Failed to delete product");
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 font-sans">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            {isEditMode ? "Edit Product" : "Add Product"}
          </h1>
          <div className="text-sm text-gray-600 flex items-center gap-1">
            <span>Home</span> <FaChevronRight />
            <span>All Products</span> <FaChevronRight />
            <span>{isEditMode ? "Edit Product" : "Add Product"}</span>
          </div>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          encType="multipart/form-data"
        >
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Product Name</label>
              <input
                {...register("name", { required: "Product name is required" })}
                className="w-full border border-gray-300 rounded p-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block font-medium mb-1">Amount (₹)</label>
              <input
                type="number"
                step="0.01"
                {...register("amount", {
                  required: "Amount is required",
                  min: {
                    value: 0.01,
                    message: "Amount must be greater than 0",
                  },
                })}
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter product amount"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm">{errors.amount.message}</p>
              )}
            </div>
            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                {...register("description")}
                className="w-full border border-gray-300 rounded p-2 h-28"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Product Images (Max 8)
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded p-2"
              />
              {errors.images && (
                <p className="text-red-500 text-sm">{errors.images?.message}</p>
              )}
            </div>
            <div>
              <label className="block font-medium mb-1">Headings</label>
              {headingFields.map((field, index) => (
                <div key={field.id} className="space-y-2 mb-2">
                  <input
                    {...register(`headings.${index}.title`, {
                      required: "Title is required",
                    })}
                    placeholder="Heading Title"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  {errors.headings?.[index]?.title && (
                    <p className="text-red-500 text-sm">
                      {errors.headings[index].title.message}
                    </p>
                  )}
                  <textarea
                    {...register(`headings.${index}.description`, {
                      required: "Description is required",
                    })}
                    placeholder="Heading Description"
                    className="w-full border border-gray-300 rounded p-2 h-20"
                  />
                  {errors.headings?.[index]?.description && (
                    <p className="text-red-500 text-sm">
                      {errors.headings[index].description.message}
                    </p>
                  )}
                  {headingFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeHeading(index)}
                      className="text-red-500 text-sm"
                    >
                      Remove Heading
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendHeading({ title: "", description: "" })}
                className="text-blue-500 text-sm"
              >
                Add Heading
              </button>
            </div>
            <div>
              <label className="block font-medium mb-1">About Points</label>
              {aboutFields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex items-center space-x-2 mb-2"
                >
                  <input
                    {...register(`about.${index}`, {
                      required: "Point is required",
                    })}
                    placeholder="Enter about point"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  {errors.about?.[index] && (
                    <p className="text-red-500 text-sm">
                      {errors.about[index].message}
                    </p>
                  )}
                  {aboutFields.length > 0 && (
                    <button
                      type="button"
                      onClick={() => removeAbout(index)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendAbout("")}
                className="text-blue-500 text-sm"
              >
                Add Point
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={imagePreviews[0] || "https://via.placeholder.com/300"}
                alt="Product Preview"
                className="w-full h-72 object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="w-full h-24 bg-gray-50 rounded">
                  <img
                    src={preview}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8 col-span-2">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded"
            >
              {isEditMode ? "UPDATE" : "ADD"}
            </button>
            {isEditMode && (
              <button
                type="button"
                onClick={handleDelete}
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                DELETE
              </button>
            )}
            <button
              type="button"
              onClick={handleCancel}
              className="border border-gray-300 px-6 py-2 rounded"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminAddProduct;
