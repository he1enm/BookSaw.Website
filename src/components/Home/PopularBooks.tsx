import { useState } from "react";
import BookCard from "../BookCard";

import img1 from "../../assets/img/tab-item1.jpg";
import img2 from "../../assets/img/tab-item2.jpg";
import img3 from "../../assets/img/tab-item3.jpg";
import img4 from "../../assets/img/tab-item4.jpg";
import img5 from "../../assets/img/tab-item5.jpg";
import img6 from "../../assets/img/tab-item6.jpg";
import img7 from "../../assets/img/tab-item7.jpg";
import img8 from "../../assets/img/tab-item8.jpg";

interface Book {
  image: string;
  title: string;
  author: string;
  price: string;
  category: string[];
}

const books: Book[] = [
  {
    image: img1,
    title: "Portrait Photography",
    author: "Adam Silber",
    price: "$40.00",
    category: ["Business"],
  },
  {
    image: img2,
    title: "Once Upon a Time",
    author: "Klem Marry",
    price: "$35.00",
    category: ["Romantic"],
  },
  {
    image: img3,
    title: "Tips Of Simple Lifestyle",
    author: "Bratt Smith",
    price: "$40.00",
    category: ["Technology"],
  },
  {
    image: img4,
    title: "Just Felt From Outside",
    author: "Nicole Wilson",
    price: "$40.00",
    category: ["Adventure"],
  },
  {
    image: img5,
    title: "Peaceful Enlightment",
    author: "Marmik Lama",
    price: "$40.00",
    category: ["Business"],
  },
  {
    image: img6,
    title: "Great travel at desert",
    author: "Sanchit Howdy",
    price: "$40.00",
    category: ["Technology"],
  },
  {
    image: img7,
    title: "Life among the pirates",
    author: "Armor Ramsey",
    price: "$40.00",
    category: ["Romantic"],
  },
  {
    image: img8,
    title: "Simple way of piece life",
    author: "Armor Ramsey",
    price: "$40.00",
    category: ["Fictional"],
  },
];

const categories = [
  "All Genre",
  "Business",
  "Technology",
  "Romantic",
  "Adventure",
  "Fictional",
];

export default function PopularBooks() {
  const [activeCategory, setActiveCategory] = useState("All Genre");

  const filteredBooks =
    activeCategory === "All Genre"
      ? books
      : books.filter((book) => book.category.includes(activeCategory));

  return (
    <section className="bg-[#f3f2ec] py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400 tracking-wide mb-2">
          SOME QUALITY ITEMS
        </p>
        <h2 className="text-4xl font-serif font-semibold mb-8">
          Popular Books
        </h2>

        {/* CATEGORII */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm font-semibold text-gray-600">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative pb-2 transition-all ${
                activeCategory === cat
                  ? "text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#b99272]"
                  : "hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID DE CĂRȚI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredBooks.map((book: Book, index: number) => (
            <BookCard key={index} {...book} />
          ))}
        </div>

        {/* QUOTE OF THE DAY */}
        <section
          id="quotation"
          className="text-center pt-16 pb-10 mt-16 border-t border-gray-200"
        >
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-6 relative inline-block after:block after:w-16 after:h-[2px] after:bg-[#b99272] after:mx-auto after:mt-2">
              Quote of the day
            </h2>
            <blockquote
              className="text-xl sm:text-2xl italic text-gray-700"
              data-aos="fade-up"
            >
              <q>
                “The more that you read, the more things you will know. The more
                that you learn, the more places you’ll go.”
              </q>
              <div className="mt-4 text-[#b99272] font-semibold text-lg">
                Dr. Seuss
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </section>
  );
}
