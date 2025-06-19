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
  author,
  price,
  oldPrice,
}: BookCardProps) {
  return (
    <div className="bg-[#efeee8] rounded-lg overflow-hidden shadow-sm flex flex-col text-center h-full">
      <Link to={`/book/${id}`} className="group flex flex-col flex-grow">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-44 sm:h-52 md:h-[340px] lg:h-[380px] object-cover"
          />
          {/* Buton peste imagine – doar pe desktop */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto hidden sm:block">
            <button className="w-full bg-black text-white py-1.5 text-xs sm:text-sm font-medium rounded">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="p-2 sm:p-3 flex flex-col justify-between flex-grow-0">
          <div className="space-y-0.5 sm:space-y-2">
            <h3 className="text-sm sm:text-base font-semibold text-[#3a3a3a] h-10 sm:h-12 overflow-hidden text-ellipsis">
              {title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm truncate">
              {author}
            </p>
          </div>

          {/* Preț + Icon – doar pe mobil */}
          <div className="mt-2 flex justify-between items-center sm:hidden">
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
          <div className="mt-2 hidden sm:flex justify-center items-center gap-2">
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
