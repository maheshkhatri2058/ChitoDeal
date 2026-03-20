import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();
  const categories = [
    {
      name: "Cars",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      path: "/cars",
    },
    {
      name: "Mobiles",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      path: "/mobiles",
    },
    {
      name: "Properties",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      path: "/properties",
    },
    {
      name: "Jobs",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      path: "/jobs",
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      path: "/electronics",
    },
    {
      name: "Bikes",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
      path: "/bikes",
    },
    {
      name: "Furniture",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      path: "/furniture",
    },
    {
      name: "Rented rooms",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      path: "/services",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero */}
      <section className="py-16 px-6 text-center bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Discover Deals Near You
        </motion.h2>
        <p className="text-gray-600 mb-8">
          Buy and sell anything easily with ChitoDeal
        </p>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-3 max-w-3xl mx-auto bg-gray-100 p-3 rounded-2xl">
          <input
            placeholder="Search for products, cars, property..."
            className="flex-1 px-4 py-2 rounded-xl border outline-none"
          />
          <button className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            <Search size={18} /> Search
          </button>
        </div>
      </section>
      {/* Categories */}
       <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => navigate(cat.path)}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition group"
          >
            {/* Image */}
            <div className="h-28 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            {/* Name */}
            <div className="p-3 text-center font-medium text-gray-800">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </section>
      {/* Listings */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Latest Listings</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition cursor-pointer"
              >
                <div className="h-40 bg-gray-200" />
                <div className="p-4">
                  <h3 className="font-semibold">Rs.10,000</h3>
                  <p className="text-sm text-gray-600">Sample product title</p>
                  <p className="text-xs text-gray-400 mt-2">Location</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
