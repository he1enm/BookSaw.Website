import { ArrowRight } from "lucide-react";
import BookCard from "../BookCard";
import book1 from "../../assets/img/product-item1.jpg";
import book2 from "../../assets/img/product-item2.jpg";
import book3 from "../../assets/img/product-item3.jpg";
import book4 from "../../assets/img/product-item4.jpg";

export default function FeaturedBooks() {
  return (
    <section className="bg-[#f3f2ec] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titluri sus */}
        <div className="mb-12 text-center">
          <p className="text-[#b99272] uppercase tracking-widest text-sm">
            Some quality items
          </p>
          <h2 className="text-5xl font-semibold text-[#3a3a3a] mt-2">
            Featured Books
          </h2>
        </div>

        {/* Grid cărți */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <BookCard
            image={book1}
            title="Simple Way Of Piece Life"
            author="Armor Ramsey"
            price="$ 40.00"
            category="Business"
          />
          <BookCard
            image={book2}
            title="Great Travel At Desert"
            author="Sanchit Howdy"
            price="$ 38.00"
            category="Adventure"
          />
          <BookCard
            image={book3}
            title="The Lady Beauty Scarlett"
            author="Arthur Doyle"
            price="$ 45.00"
            category="Romantic"
          />
          <BookCard
            image={book4}
            title="Once Upon A Time"
            author="Klien Marry"
            price="$ 35.00"
            category="Fictional"
          />
        </div>

        {/* Buton jos dreapta */}
        <div className="mt-10 flex justify-end">
          <button className="flex items-center gap-2 text-[#3a3a3a] hover:text-[#b99272] font-medium transition-colors duration-200">
            View all products <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
