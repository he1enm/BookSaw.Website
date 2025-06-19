import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  categories: string[];
  price?: number;
  oldPrice?: number;
  inStock: boolean;
  createdAt: string;
  imageUrl: string;
}

export default function BookCard({
  id,
  imageUrl,
  title,
  price,
  oldPrice,
}: BookCardProps) {
  return (
    <div className="bg-[#efeee8] rounded-lg overflow-hidden shadow-sm flex flex-col text-center h-full">
      <Link to={`/book/${id}`} className="group flex flex-col flex-grow">
        {/* Imagine + dreptunghi */}
        <div className="relative w-full sm:w-[220px] sm:h-[320px] mx-auto">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-44 sm:h-[320px] object-cover"
          />

          {/* Dreptunghi semi-transparent în stânga imaginii */}
          <div className="absolute top-0 bottom-0 left-0 w-4 bg-black/20 blur-sm pointer-events-none" />
        </div>

        {/* Buton peste imagine – doar pe desktop */}
        <div className="relative">
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto hidden sm:block">
            <button className="w-full bg-black text-white py-1.5 text-xs sm:text-sm font-medium rounded">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="p-1.5 sm:p-2 flex flex-col justify-between flex-grow-0">
          <h3 className="text-sm sm:text-base font-semibold text-[#3a3a3a] h-8 sm:h-9 overflow-hidden text-ellipsis leading-tight">
            {title}
          </h3>

          {/* Preț + Icon – doar pe mobil */}
          <div className="mt-1.5 flex justify-between items-center sm:hidden">
            {typeof price === "number" ? (
              <span className="text-[#b99272] text-sm font-medium">
                ${price.toFixed(2)}
              </span>
            ) : (
              <span className="text-gray-400 text-sm italic">
                Price unavailable
              </span>
            )}

            <button className="text-[#3a3a3a] text-lg">
              <FiShoppingCart />
            </button>
          </div>

          {/* Preț – doar pe desktop */}
          <div className="mt-1.5 hidden sm:flex justify-center items-center gap-2">
            {typeof oldPrice === "number" && (
              <span className="text-sm line-through text-gray-400">
                ${oldPrice.toFixed(2)}
              </span>
            )}
            {typeof price === "number" ? (
              <span className="text-[#b99272] text-md font-medium">
                ${price.toFixed(2)}
              </span>
            ) : (
              <span className="text-gray-400 text-md italic">
                Price unavailable
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
