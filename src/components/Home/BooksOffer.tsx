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
    appendDots: (dots: React.ReactNode) => {
      const limitedDots = Array.isArray(dots) ? dots.slice(0, 5) : dots;

      return (
        <div className="mt-4 sm:mt-6 lg:mt-10">
          <ul className="flex justify-center gap-2">{limitedDots}</ul>
        </div>
      );
    },

    customPaging: () => (
      <div className="w-2 h-2 bg-[#b99272] rounded-full opacity-50"></div>
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-[#fdfcf7] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-semibold text-[#3a3a3a] mt-2 mb-8">
          Books on Offer
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {discountedBooks.map((book) => (
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
