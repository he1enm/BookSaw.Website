import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../BookCard";
import { useBooks } from "../../hooks/useBooks";
import type { Book } from "../../Models/Book";

function getRandomBooks(books: Book[], count: number) {
  const booksCopy = [...books];
  const randomBooks: Book[] = [];

  for (let i = 0; i < count; i++) {
    if (booksCopy.length === 0) break;
    const randomIndex = Math.floor(Math.random() * booksCopy.length);
    randomBooks.push(booksCopy[randomIndex]);
    booksCopy.splice(randomIndex, 1);
  }

  return randomBooks;
}

export default function BooksOffer() {
  const { books, loading, error } = useBooks();
  const [displayedBooks, setDisplayedBooks] = useState<Book[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (Array.isArray(books)) {
      const filtered = books.filter(
        (book) =>
          typeof book.oldPrice === "number" &&
          typeof book.price === "number" &&
          book.inStock
      );
      setDisplayedBooks(getRandomBooks(filtered, 8));
    }
  }, [books]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    onSwipe: () => setIsDragging(true),
    afterChange: () => setTimeout(() => setIsDragging(false), 10),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4 sm:mt-6 lg:mt-10">
        <ul className="flex justify-center gap-2 ">
          {dots && React.Children.toArray(dots).slice(0, 5)}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-[#b99272] rounded-full opacity-50 mt-5"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (loading) return <p>Se încarcă ofertele...</p>;
  if (error) return <p>{error}</p>;
  if (displayedBooks.length === 0) return <p>Nu sunt cărți în ofertă.</p>;

  return (
    <section className="py-20 bg-[#fdfcf7] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-semibold text-[#3a3a3a] mt-2 mb-8">
          Books on Offer
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {displayedBooks.map((book) => (
              <div key={book.id} className="px-2">
                <BookCard {...book} isDragging={isDragging} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
