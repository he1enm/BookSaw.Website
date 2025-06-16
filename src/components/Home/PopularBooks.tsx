import { useState } from "react";
import BookCard from "../BookCard";
import { POPULAR_BOOKS } from "../../Constants/PopularBooks";
import type { Book } from "../../Models/Book";

const categories = [
  "All Genre",
  "Business",
  "Technology",
  "Romantic",
  "Adventure",
  "Fictional",
];

export default function PopularBooks() {
  const [activeCategory, setActiveCategory] = useState("All Genre");

  const filteredBooks =
    activeCategory === "All Genre"
      ? POPULAR_BOOKS
      : POPULAR_BOOKS.filter((book: Book) =>
          book.category.includes(activeCategory)
        );

  return (
    <section className="bg-[#f3f2ec] py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400 tracking-wide mb-2">
          SOME QUALITY ITEMS
        </p>
        <h2 className="text-4xl font-serif font-semibold mb-8">
          Popular Books
        </h2>

        {/* CATEGORII */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-semibold text-gray-600">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative pb-2 transition-all ${
                activeCategory === cat
                  ? "text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#b99272]"
                  : "hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID DE CĂRȚI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredBooks.map((book: Book, index: number) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
