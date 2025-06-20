import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookCard from "../BookCard";
import Filtres from "./Filters";
import { useBooks } from "../../hooks/useBooks";

export default function ProductList() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";

  const { books, loading, error } = useBooks(searchTerm);

  const [category, setCategory] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  if (loading) return <p>Se încarcă...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  const clearSearch = () => {
    // Creează un URL fără parametrul search
    queryParams.delete("search");

    // Reconstruiește string-ul query
    const newSearch = queryParams.toString();
    const newUrl = `${location.pathname}${newSearch ? "?" + newSearch : ""}`;

    navigate(newUrl);
  };

  // filtrare, sortare, paginare ca mai sus
  const filteredBooks = books.filter((book) => {
    const price = book.price;
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;

    const matchesCategory =
      category.length === 0 ||
      category.some((cat) => book.categories.includes(cat));
    const matchesPrice = price >= min && price <= max;
    return matchesCategory && matchesPrice;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "title-asc") return a.title.localeCompare(b.title);
    if (sortBy === "title-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  const paginatedBooks = sortedBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);

  return (
    <div className="w-full pb-10">
      {searchTerm && (
        <div className="flex justify-items-start   space-x-4 my-3 px-5 lg:pl-20 pl-8 max-w-4xl">
          <h1 className="text-black lg:text-4xl text-2xl font-semibold text-left ">
            Search: {searchTerm}
          </h1>
          <button
            onClick={clearSearch}
            className="bg-[#b99272] hover:bg-gray-400 text-white text-sm font-semibold px-3 py-1 mt-2 rounded transition"
            aria-label="Clear search"
          >
            Clear
          </button>
        </div>
      )}

      <div className="w-full px-4">
        <Filtres
          category={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {paginatedBooks.length > 0 ? (
            paginatedBooks.map((book) => <BookCard key={book.id} {...book} />)
          ) : (
            <p>No books found.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded border ${
                  page === currentPage
                    ? "bg-[#b99272] text-white"
                    : "bg-white text-[#3a3a3a]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
