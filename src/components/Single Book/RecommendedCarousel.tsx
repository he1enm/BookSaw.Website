import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../BookCard";
import { useBooks } from "../../hooks/useBooks";
import type { Book } from "../../Models/Book";

interface RecommendedCarouselProps {
  categories: string[];
}

// Funcție auxiliară pentru a selecta 8 cărți random
function getRandomBooks(books: Book[], count: number): Book[] {
  const shuffled = [...books];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function RecommendedCarousel({
  categories,
}: RecommendedCarouselProps) {
  const { books, loading, error } = useBooks();

  // Selectăm 8 cărți recomandate, în stoc, și randomizate
  const recommendedBooks = useMemo(() => {
    if (!Array.isArray(books)) return [];

    const filtered = books.filter(
      (book) =>
        book.inStock &&
        Array.isArray(book.categories) &&
        book.categories.some((cat) => categories.includes(cat))
    );

    return getRandomBooks(filtered, 8);
  }, [books, categories]);

  if (loading) return <p>Se încarcă recomandările...</p>;
  if (error) return <p>{error}</p>;

  if (recommendedBooks.length === 0) {
    return (
      <section className="py-20 bg-[#fdfcf7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#3a3a3a] mt-2 mb-8">
            Recommended Books
          </h2>
          <p className="text-gray-500">No recommendations available.</p>
        </div>
      </section>
    );
  }

  const settings = {
    dots: true,
    infinite: recommendedBooks.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, recommendedBooks.length),
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-10 sm:mt-14 lg:mt-20">
        <ul className="flex justify-center gap-2">
          {dots && React.Children.toArray(dots).slice(0, 5)}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-[#b99272] rounded-full opacity-50 mt-6"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, recommendedBooks.length),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: Math.min(2, recommendedBooks.length),
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-[#fdfcf7] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#3a3a3a] mt-2 mb-8">
          Recommended Books
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {recommendedBooks.map((book) => (
              <div key={book.id} className="px-2">
                <BookCard {...book} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
