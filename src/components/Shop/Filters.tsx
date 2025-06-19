import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { HiChevronDown } from "react-icons/hi";

type Props = {
  category: string[]; // listă de categorii selectate
  setCategory: Dispatch<SetStateAction<string[]>>;
  minPrice: string;
  setMinPrice: Dispatch<SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

const categoriesList = [
  "Drama",
  "Contemporary",
  "Poetry",
  "Young Adult",
  "Romance",
  "Fantasy",
  "Psychological",
  "Adventure",
  "Mystery",
  "Thriller",
  "Psychological Thriller",
  "Fiction",
];

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

  const toggleCategory = (cat: string) => {
    if (cat === "All") {
      setCategory([]);
      return;
    }
    if (category.includes(cat)) {
      setCategory(category.filter((c) => c !== cat));
    } else {
      setCategory([...category, cat]);
    }
  };

  const isAllSelected = category.length === 0;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#3a3a3a]">Filters</h2>

        <button
          className="lg:hidden p-2 text-[#3a3a3a]"
          onClick={() => setShowFilters(!showFilters)}
          aria-label={showFilters ? "Hide Filters" : "Show Filters"}
          style={{ transform: showFilters ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <HiChevronDown size={24} />
        </button>
      </div>

      {(showFilters ||
        (typeof window !== "undefined" && window.innerWidth >= 1024)) && (
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-4 max-w-full">
            <button
              onClick={() => setCategory([])}
              className={`px-5 py-2 rounded-full border text-sm font-semibold transition-colors duration-200 ${
                isAllSelected
                  ? "bg-[#b99272] text-white border-[#b99272]"
                  : "bg-white text-[#3a3a3a] border-gray-300 hover:bg-gray-100"
              }`}
            >
              All
            </button>

            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-5 py-2 rounded-full border text-sm font-semibold transition-colors duration-200 ${
                  category.includes(cat)
                    ? "bg-[#b99272] text-white border-[#b99272]"
                    : "bg-white text-[#3a3a3a] border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center mt-4 lg:mt-0">
            <input
              type="number"
              placeholder="Min"
              className="border px-4 py-2 rounded w-[110px] text-sm"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span className="text-[#3a3a3a] text-lg font-semibold">–</span>
            <input
              type="number"
              placeholder="Max"
              className="border px-4 py-2 rounded w-[110px] text-sm"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <select
              className="border px-4 py-2 rounded text-[#3a3a3a] min-w-[160px] text-sm"
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
