import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BookDetails from "../components/Single Book/BookDetails";
import RecommendedCarousel from "../components/Single Book/RecommendedCarousel";
import { ALL_BOOKS } from "../Constants/ALL_BOOKS";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  categories: string[];
  price: number;
  oldPrice?: number;
  inStock: boolean;
  createdAt: string;
  imageUrl: string;
}

export default function SingleBook() {
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundBook = ALL_BOOKS.find((b) => b.id === bookId);
    setBook(foundBook || null);
    setLoading(false);
  }, [bookId]);

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>Book not found</p>;

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

      {/* Recomandările pe baza categoriilor */}
      <RecommendedCarousel categories={book.categories} />
    </>
  );
}
