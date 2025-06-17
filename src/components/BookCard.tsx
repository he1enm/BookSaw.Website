import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  categories: string[];
  price: number;
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
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <button className="w-full bg-black text-white py-1.5 text-xs sm:text-sm font-medium rounded">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="p-3 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-[#3a3a3a]">
              {title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">{author}</p>
          </div>

          <div className="mt-2 flex justify-center items-center gap-2">
            {oldPrice && (
              <span className="text-sm line-through text-gray-400">
                ${oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-[#b99272] text-md font-medium">
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
