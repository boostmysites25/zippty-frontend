import React, { useState } from "react";
import { products } from "../util/productsDetails";

const ProductFilters = () => {
  const [price, setPrice] = useState(9);
  const categories = [
    { name: "Furniture", count: 21 },
    { name: "Bowls", count: 29 },
    { name: "Clothing", count: 45 },
    { name: "Food", count: 80 },
    { name: "Toys", count: 50 },
    { name: "Sale", count: 24 },
  ];

  const brands = [
    { name: "Natural food", count: 29 },
    { name: "Pet Care", count: 18 },
    { name: "Dogs friend", count: 76 },
    { name: "Pet food", count: 43 },
    { name: "Favorite pet", count: 29 },
    { name: "Green line", count: 15 },
  ];

  const tags = [
    "Dog food",
    "Cat food",
    "Natural",
    "Parrot",
    "Small dog",
    "Cat",
  ];

  return (
    <div>
      {" "}
      {/* Sidebar */}
      <aside className="md:col-span-1">
        <div className="space-y-8">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Filter by categories</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`category-${category.name}`}
                    className="rounded border-gray-300"
                  />
                  <label
                    htmlFor={`category-${category.name}`}
                    className="text-sm flex-1 cursor-pointer"
                  >
                    {category.name}
                  </label>
                  <span className="text-sm text-gray-500">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-4">Filter by Price</h3>
            <input
              type="range"
              min="9"
              max="369"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm">Price: ${price} - $369</span>
              <button className="bg-gray-900 text-white px-4 py-1 text-sm rounded">
                Apply
              </button>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-semibold mb-4">Filter by brands</h3>
            <div className="space-y-3">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`brand-${brand.name}`}
                    className="rounded border-gray-300"
                  />
                  <label
                    htmlFor={`brand-${brand.name}`}
                    className="text-sm flex-1 cursor-pointer"
                  >
                    {brand.name}
                  </label>
                  <span className="text-sm text-gray-500">{brand.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold mb-4">Filter by tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Popular Products */}
          <div>
            <h3 className="font-semibold mb-4">Popular products</h3>
            <div className="space-y-4">
              {products.slice(0, 4).map((product) => (
                <div key={product.name} className="flex items-center gap-3">
                  <div className="w-12 min-w-12 h-12 rounded overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full min-w-12 object-cover aspect-square"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{product.title}</h4>
                    <p className="text-sm">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProductFilters;
