import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../BookCard";

import img1 from "../../assets/img/product-item2.jpg";
import img2 from "../../assets/img/product-item4.jpg";
import img3 from "../../assets/img/product-item5.jpg";
import img4 from "../../assets/img/product-item6.jpg";
import img5 from "../../assets/img/product-item7.jpg";
import img6 from "../../assets/img/product-item8.jpg";

const discountedBooks = [
  {
    image: img1,
    title: "The Creative Eye",
    author: "Lisa Hart",
    price: "$25.00",
    oldPrice: "$40.00",
  },
  {
    image: img2,
    title: "Mindful Days",
    author: "Paul Grant",
    price: "$30.00",
    oldPrice: "$50.00",
  },
  {
    image: img3,
    title: "Digital Dreams",
    author: "Sophie Lee",
    price: "$20.00",
    oldPrice: "$35.00",
  },
  {
    image: img4,
    title: "The Silent Hour",
    author: "George Miles",
    price: "$28.00",
    oldPrice: "$42.00",
  },
  {
    image: img5,
    title: "Winds of Wisdom",
    author: "Anna Bright",
    price: "$22.00",
    oldPrice: "$38.00",
  },
  {
    image: img6,
    title: "Night Sky Chronicles",
    author: "Tom Ryder",
    price: "$27.00",
    oldPrice: "$45.00",
  },
];

export default function BooksOffer() {
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
            {discountedBooks.map((book, idx) => (
              <div key={idx} className="px-3">
                <BookCard {...book} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Tailwind for slick-dots */}
      <style>{`
        .slick-dots {
          display: flex !important;
          justify-content: center;
          margin-top: 3rem;
        }
        .slick-dots li button:before {
          font-size: 8px;
          color: #b99272;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #b99272;
        }
      `}</style>
    </section>
  );
}
