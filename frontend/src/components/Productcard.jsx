import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  if (!item) return null;

  const handleClick = () => {
    navigate(`/listing/${item.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative w-full h-40 bg-gray-200 overflow-hidden">
        <img
          src={item.image || "https://via.placeholder.com/400"}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />

        {/* Condition Badge */}
        <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
          {item.condition}
        </span>

        {/* Wishlist Icon */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow"
        >
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Price */}
        <h2 className="text-base font-bold text-gray-900">
          ₹ {item.price}
        </h2>

        {/* Title */}
        <p className="text-sm text-gray-700 mt-1 line-clamp-1">
          {item.title}
        </p>

        {/* Location + Time */}
        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
          <span className="truncate">{item.location}</span>
          <span>{item.postedAt}</span>
        </div>
      </div>
    </div>
  );
}
