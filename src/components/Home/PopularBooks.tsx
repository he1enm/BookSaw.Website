import { useState } from "react";
import BookCard from "../BookCard";
import { ALL_BOOKS } from "../../Constants/ALL_BOOKS";
import type { Book } from "../../Models/Book";

const categories = [
  "All Genre",
  "Business",
  "Technology",
  "Romantic",
  "Adventure",
  "Fictional",
];

const POPULAR_BOOKS: Book[] = ALL_BOOKS.slice(0, 8);

export default function PopularBooks() {
  const [activeCategory, setActiveCategory] = useState("All Genre");

  const filteredBooks =
    activeCategory === "All Genre"
      ? POPULAR_BOOKS
      : POPULAR_BOOKS.filter((book: Book) =>
          book.categories.includes(activeCategory)
        );

  return (
    <section className="bg-[#f3f2ec] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#b99272] uppercase tracking-widest text-sm">
          Some quality items
        </p>
        <h2 className="text-5xl font-semibold text-[#3a3a3a] mt-2 mb-8">
          Popular Books
        </h2>

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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredBooks.map((book: Book, index: number) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
