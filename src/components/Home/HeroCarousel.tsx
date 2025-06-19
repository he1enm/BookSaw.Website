import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "67acf7a3-280a-480a-8aa5-86bf74767e44",
    title: "Almost Us",
    author: "Lizzy Hazel",
    description:
      "In 'Almost Us', a quiet life is shattered when secrets from the past resurface, threatening everything the main character holds dear.",
    button: "READ MORE",
    image: "https://img.wattpad.com/cover/396094032-256-k894368.jpg",
  },
  {
    id: "2ab828c7-9014-4476-8c81-421ab81fa6cf",
    title: "Lilah",
    author: "Ashlyn Pope",
    description:
      "In this gripping tale, 'Lilah' unveils the darkness behind the perfect facade and the resilience of a heart scarred by betrayal.",
    button: "READ MORE",
    image: "https://img.wattpad.com/cover/181121904-256-k922024.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const { id, title, description, button, image, author } = slides[current];

  return (
    <section className="bg-[#f3f2ec] min-h-screen flex items-center justify-center px-8 sm:px-32 lg:px-40 relative">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-semibold leading-tight">
            {title}
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            {description}
          </p>
          <div>
            <Link
              to={`/book/${id}`}
              className="inline-flex items-center px-6 py-3 border border-[#D8C1AC] text-[#D8C1AC] font-semibold text-sm tracking-wide hover:bg-[#D8C1AC] hover:text-white transition"
            >
              {button}
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Imagine */}
        <div className="flex-1 relative w-full max-w-sm mx-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain drop-shadow-md rounded-tr-lg rounded-br-lg"
          />

          {/* Dreptunghi semi-transparent în stânga */}
          <div className="absolute top-0 bottom-0 left-2 w-4 bg-black/20 blur-sm pointer-events-none" />

          {/* Autor */}
          <p className="absolute bottom-2 right-4 text-xs text-gray-500">
            - {author}
          </p>
        </div>
      </div>

      {/* Săgeți navigare */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 border border-gray-400 bg-transparent rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 border border-gray-400 bg-transparent rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </section>
  );
}
