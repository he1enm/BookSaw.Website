import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useCategories } from "../../hooks/useCategories";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

type Props = {
  category: string[];
  setCategory: Dispatch<SetStateAction<string[]>>;
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
  const { categories, loading, error } = useCategories();

  const width = useWindowWidth();

  const [showCategories, setShowCategories] = useState(false);
  const isAllSelected = category.length === 0;

  const toggleCategory = (cat: string) => {
    if (cat === "All") return setCategory([]);
    setCategory(
      category.includes(cat)
        ? category.filter((c) => c !== cat)
        : [...category, cat]
    );
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="lg:hidden flex justify-center">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="text-sm px-4 py-2 rounded bg-[#b99272] text-white font-medium"
        >
          {showCategories ? "Hide Categories" : "Show Categories"}
        </button>
      </div>

      {(showCategories || width >= 1024) && (
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCategory([])}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              isAllSelected
                ? "bg-[#b99272] text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category.includes(cat.name)
                  ? "bg-[#b99272] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-end gap-4 items-center">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-[100px] px-3 py-2 rounded border text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b99272]"
        />
        <span className="text-[#3a3a3a] font-medium">–</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-[100px] px-3 py-2 rounded border text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b99272]"
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
  );
}
