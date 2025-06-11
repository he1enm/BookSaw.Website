import { useState } from "react";
import banner1 from "../../assets/img/main-banner1.jpg";
import banner2 from "../../assets/img/main-banner2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Life Of The Wild",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
    button: "READ MORE",
    image: banner1,
    author: "Sanchit Howdy",
  },
  {
    title: "Birds Gonna Be Happy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
    button: "READ MORE",
    image: banner2,
    author: "Timbur Hood",
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

  const { title, description, button, image, author } = slides[current];

  return (
    <section className="bg-[#f3f2ec] min-h-screen flex items-center justify-center px-8 sm:px-32 lg:px-40 relative">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left - Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl font-serif font-semibold leading-tight">
            {title}
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            {description}
          </p>
          <div>
            <button className="inline-flex items-center px-6 py-3 border border-[#D8C1AC] text-[#D8C1AC] font-semibold text-sm tracking-wide hover:bg-[#D8C1AC] hover:text-white transition">
              {button}
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 relative w-full max-w-sm mx-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain drop-shadow-md"
          />
          <p className="absolute bottom-2 right-4 text-xs text-gray-500">
            - {author}
          </p>
        </div>
      </div>

      {/* Navigation Arrows at Sides */}
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
