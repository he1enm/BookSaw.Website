import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../BookCard";
import { ALL_BOOKS } from "../../Constants/ALL_BOOKS";

export default function BooksOffer() {
  const discountedBooks = ALL_BOOKS.filter((book) => book.oldPrice);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-[#fdfcf7] px-4 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-semibold mb-10">
          Books on Offer
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {discountedBooks.map((book) => (
              <div key={book.id} className="px-3">
                <BookCard {...book} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
