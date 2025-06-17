import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../BookCard";
import { ALL_BOOKS } from "../../Constants/ALL_BOOKS";

interface RecommendedCarouselProps {
  categories: string[];
}

export default function RecommendedCarousel({
  categories,
}: RecommendedCarouselProps) {
  const recommendedBooks = ALL_BOOKS.filter((book) =>
    book.categories.some((cat) => categories.includes(cat))
  );

  const settings = {
    dots: true,
    infinite: recommendedBooks.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, recommendedBooks.length),
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => {
      const limitedDots = Array.isArray(dots) ? dots.slice(0, 5) : dots;
      return (
        <div style={{ marginTop: "24px" }}>
          <ul className="flex justify-center gap-2">{limitedDots}</ul>
        </div>
      );
    },
    customPaging: () => (
      <div className="w-2 h-2 bg-[#b99272] rounded-full opacity-50"></div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: Math.min(3, recommendedBooks.length) },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(2, recommendedBooks.length) },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (recommendedBooks.length === 0) {
    return (
      <section className="py-20 bg-[#fdfcf7] px-4 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-semibold mb-10">
            Recommended Books
          </h2>
          <p className="text-gray-500">No recommendations available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#fdfcf7] px-4 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-semibold mb-10">
          Recommended Books
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {recommendedBooks.map((book) => (
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
