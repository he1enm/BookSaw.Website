import { ArrowRight } from "lucide-react";
import BookCard from "../BookCard";
import { useBooks } from "../../hooks/useBooks";
import type { Book } from "../../Models/Book";

function getRandomBooks(books: Book[], count: number) {
  const booksCopy = [...books];
  const randomBooks = [];

  for (let i = 0; i < count; i++) {
    if (booksCopy.length === 0) break;
    const randomIndex = Math.floor(Math.random() * booksCopy.length);
    randomBooks.push(booksCopy[randomIndex]);
    booksCopy.splice(randomIndex, 1);
  }

  return randomBooks;
}

export default function FeaturedBooks() {
  const { books, loading, error } = useBooks();

  if (loading) return <p>Se încarcă...</p>;
  if (error) return <p>{error}</p>;

  const featuredBooks = getRandomBooks(books, 4);

  return (
    <section className="bg-[#f3f2ec] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-[#b99272] uppercase tracking-widest text-sm">
            Some quality items
          </p>
          <h2 className="text-5xl font-semibold text-[#3a3a3a] mt-2">
            Featured Books
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button className="flex items-center gap-2 text-[#3a3a3a] hover:text-[#b99272] font-medium transition-colors duration-200">
            View all products <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
