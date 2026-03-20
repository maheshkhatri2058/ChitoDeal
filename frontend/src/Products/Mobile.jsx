import React from "react";
import ProductCard from "../components/Productcard";

export default function Mobile() {
const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e",
    title: "iPhone 13 Pro Max 256GB Sierra Blue",
    price: "1,35,000",
    location: "Kathmandu, Nepal",
    condition: "Like New",
    postedAt: "2 days ago",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    title: "Samsung Galaxy S22 Ultra 128GB",
    price: "1,10,000",
    location: "Pokhara, Nepal",
    condition: "Excellent",
    postedAt: "1 day ago",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    title: "iPhone 11 64GB (Used)",
    price: "55,000",
    location: "Lalitpur, Nepal",
    condition: "Used",
    postedAt: "3 days ago",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "OnePlus 11R 5G (Brand New)",
    price: "65,000",
    location: "Bhaktapur, Nepal",
    condition: "Brand New",
    postedAt: "5 days ago",
  },
  {
    id: 5,
    image: "/mobiles/iphone12.png",
    title: "iPhone 12 128GB Black",
    price: "75,000",
    location: "Biratnagar, Nepal",
    condition: "Like New",
    postedAt: "6 days ago",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    title: "Realme GT Neo 3",
    price: "35,000",
    location: "Butwal, Nepal",
    condition: "Good",
    postedAt: "4 days ago",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    title: "Oppo Reno 8",
    price: "42,000",
    location: "Dharan, Nepal",
    condition: "Excellent",
    postedAt: "1 week ago",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00",
    title: "Samsung Galaxy A73",
    price: "48,000",
    location: "Nepalgunj, Nepal",
    condition: "Like New",
    postedAt: "2 days ago",
  },
  {
    id: 9,
    image: "/mobiles/iphone13.jpeg",
    title: "iphone 13 Pro",
    price: "50,000",
    location: "Janakpur, Nepal",
    condition: "Excellent",
    postedAt: "3 days ago",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c",
    title: "Samsung Galaxy S21 FE (Used)",
    price: "60,000",
    location: "Hetauda, Nepal",
    condition: "Used",
    postedAt: "5 days ago",
  },
];


    console.log("Mobile rendered");

  return (
   <>
   <section className="bg-white px-4 py-6 shadow-sm">
  <div className="max-w-6xl mx-auto">
    
    {/* Title */}
    <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
      Mobile Phones in Nepal
    </h1>

    {/* Subtitle */}
    <p className="text-sm text-gray-500 mt-1">
      Buy and sell new & used mobile phones near you
    </p>

    {/* Filters */}
    <div className="flex gap-2 mt-4 overflow-x-auto">
      {["All", "iPhone", "Samsung", "OnePlus", "Budget", "Used"].map((filter) => (
        <button
          key={filter}
          className="px-4 py-1.5 bg-gray-100 rounded-full text-sm whitespace-nowrap hover:bg-gray-200"
        >
          {filter}
        </button>
      ))}
    </div>

  </div>
</section>

     <section className="bg-gray-100 min-h-screen py-6 px-3">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-4 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          Fresh Recommendations
        </h1>

        <button className="text-sm text-blue-600 font-medium">
          View more
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>

    </section>
   </>
  );
}
