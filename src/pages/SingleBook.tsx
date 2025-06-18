import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookDetails from "../components/Single Book/BookDetails";
import RecommendedCarousel from "../components/Single Book/RecommendedCarousel";
import { UseBooks } from "../Constants/UseBooks";
import type { Book } from "../Models/Book";

export default function SingleBook() {
  const { bookId } = useParams<{ bookId: string }>();
  const { books, loading, error } = UseBooks();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!loading && books.length > 0) {
      const foundBook = books.find((b: Book) => b.id === bookId);
      setBook(foundBook || null);
    }
  }, [bookId, books, loading]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-20">{error}</p>;
  if (!book) return <p className="text-center py-20">Book not found.</p>;

  return (
    <>
      <BookDetails
        image={book.imageUrl}
        title={book.title}
        author={book.author}
        description={book.description}
        price={book.price.toString()}
        oldPrice={book.oldPrice?.toString()}
        category={book.categories}
        inStock={book.inStock}
      />

      <RecommendedCarousel categories={book.categories} />
    </>
  );
}
