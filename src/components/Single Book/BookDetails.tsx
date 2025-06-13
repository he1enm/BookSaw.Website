import { useState } from "react";

interface BookDetailsProps {
  image: string;
  title: string;
  author: string;
  description: string;
  price: string;
  oldPrice?: string;
  category?: string[];
  inStock?: boolean;
}

export default function BookDetails({
  image,
  title,
  author,
  description,
  price,
  oldPrice,
  category,
  inStock = true,
}: BookDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg">
      {/* Book image container (now narrower) */}
      <div className="bg-[#efeee8] p-6 flex items-center justify-center rounded-lg shadow-md max-w-md mx-auto w-full">
        <img
          src={image}
          alt={title}
          className="max-h-[400px] w-full object-contain"
          style={{ userSelect: "none" }}
        />
      </div>

      {/* Book info */}
      <div className="flex flex-col justify-start space-y-5">
        {category && (
          <p className="text-sm text-[#b99272] uppercase tracking-wider font-semibold">
            {category}
          </p>
        )}

        <h1 className="text-4xl font-extrabold text-[#3a3a3a]">{title}</h1>
        <p className="text-gray-600 text-lg italic">by {author}</p>

        <div className="flex items-center gap-6">
          {oldPrice && (
            <span className="text-lg text-gray-400 line-through">
              {oldPrice} RON
            </span>
          )}
          <span className="text-3xl text-[#b99272] font-bold">{price} RON</span>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>

        {/* Stock indicator */}
        <div>
          {inStock ? (
            <span className="inline-block text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full font-medium">
              In stock
            </span>
          ) : (
            <span className="inline-block text-sm text-red-700 bg-red-100 px-3 py-1 rounded-full font-medium">
              Out of stock
            </span>
          )}
        </div>

        {/* Quantity selector + button */}
        <div className="mt-4 flex items-center gap-6">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden select-none shadow-sm">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-4 py-2 text-2xl font-semibold text-[#b99272] hover:bg-[#b99272] hover:text-white transition"
              aria-label="Decrease quantity"
              type="button"
            >
              −
            </button>

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-16 text-center text-xl font-semibold text-gray-700 border-x border-gray-300 outline-none"
              style={{
                MozAppearance: "textfield",
                WebkitAppearance: "none",
                appearance: "none",
              }}
              aria-label="Quantity"
            />

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-4 py-2 text-2xl font-semibold text-[#b99272] hover:bg-[#b99272] hover:text-white transition"
              aria-label="Increase quantity"
              type="button"
            >
              +
            </button>
          </div>

          <button
            disabled={!inStock}
            className={`px-8 py-3 rounded-lg font-semibold transition-transform ${
              inStock
                ? "bg-gradient-to-r from-[#b99272] to-[#8c6b4a] text-white hover:from-[#8c6b4a] hover:to-[#b99272] active:scale-95 shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
