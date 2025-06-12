import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { HiChevronDown } from "react-icons/hi";

type Props = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  minPrice: string;
  setMinPrice: Dispatch<SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

export default function Filtres({
  category,
  setCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
}: Props) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Filters + săgeată pe mobil */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#3a3a3a]">Filters</h2>

        {/* Săgeată pe mobil */}
        <button
          className="lg:hidden p-2 text-[#3a3a3a]"
          onClick={() => setShowFilters(!showFilters)}
          aria-label={showFilters ? "Hide Filters" : "Show Filters"}
          style={{ transform: showFilters ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <HiChevronDown size={24} />
        </button>
      </div>

      {/* Filtrele - arătate mereu pe desktop, condițional pe mobil */}
      {(showFilters ||
        (typeof window !== "undefined" && window.innerWidth >= 1024)) && (
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          {/* Categoriile */}
          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "Business",
              "Technology",
              "Romantic",
              "Adventure",
              "Fictional",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  category === cat
                    ? "bg-[#b99272] text-white"
                    : "bg-white text-[#3a3a3a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Preț și sortare */}
          <div className="flex flex-wrap gap-2 items-center">
            <input
              type="number"
              placeholder="Min"
              className="border px-3 py-1 rounded w-[100px]"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span className="text-[#3a3a3a]">-</span>
            <input
              type="number"
              placeholder="Max"
              className="border px-3 py-1 rounded w-[100px]"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <select
              className="border px-3 py-1 rounded text-[#3a3a3a] min-w-[150px]"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="title-asc">Title: A → Z</option>
              <option value="title-desc">Title: Z → A</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
