import { useState } from "react";
import BookCard from "../BookCard";
import Filtres from "./Filters";
import { UseBooks } from "../../Constants/UseBooks";
import type { Book } from "../../Models/Book";

export default function ProductList() {
  const { books, loading, error } = UseBooks();

  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (loading) return <p>Se încarcă...</p>;
  if (error) return <p>{error}</p>;

  const filteredBooks = books.filter((book: Book) => {
    const price = book.price;
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    const matchesCategory =
      category === "All" || book.categories.includes(category);
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {paginatedBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

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
      </div>
    </div>
  );
}
