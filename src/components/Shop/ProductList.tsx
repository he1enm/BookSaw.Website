import { useState } from "react";
import BookCard from "../BookCard";
import Filtres from "./Filters";

import img1 from "../../assets/img/product-item1.jpg";
import img2 from "../../assets/img/product-item2.jpg";
import img3 from "../../assets/img/product-item3.jpg";
import img4 from "../../assets/img/product-item4.jpg";
import img5 from "../../assets/img/product-item5.jpg";
import img6 from "../../assets/img/product-item6.jpg";
import img7 from "../../assets/img/product-item7.jpg";
import img8 from "../../assets/img/product-item8.jpg";
import img9 from "../../assets/img/tab-item1.jpg";
import img11 from "../../assets/img/tab-item3.jpg";
import img10 from "../../assets/img/tab-item2.jpg";
import img12 from "../../assets/img/tab-item4.jpg";
import img13 from "../../assets/img/tab-item5.jpg";
import img14 from "../../assets/img/tab-item6.jpg";
import img15 from "../../assets/img/tab-item7.jpg";
import img16 from "../../assets/img/tab-item8.jpg";

const books = [
  {
    image: img1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Business"],
  },
  {
    image: img2,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    price: "79",
    category: ["Business"],
  },
  {
    image: img3,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: "59",
    oldPrice: "99",
    category: ["Business"],
  },
  {
    image: img4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Business"],
  },
  {
    image: img5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Technology"],
  },
  {
    image: img6,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Technology"],
  },
  {
    image: img7,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Romantic"],
  },
  {
    image: img8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Romantic"],
  },
  {
    image: img9,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Romantic"],
  },
  {
    image: img10,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Adventure"],
  },
  {
    image: img11,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Adventure"],
  },
  {
    image: img12,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Adventure"],
  },
  {
    image: img13,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Fictional"],
  },
  {
    image: img14,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Fictional"],
  },
  {
    image: img15,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Fictional"],
  },
  {
    image: img16,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "49",
    oldPrice: "69",
    category: ["Fictional"],
  },
];

export default function ProductList() {
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredBooks = books.filter((book) => {
    const price = parseFloat(book.price);
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    const matchesCategory =
      category === "All" || book.category.includes(category);
    const matchesPrice = price >= min && price <= max;
    return matchesCategory && matchesPrice;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "price-asc")
      return parseFloat(a.price) - parseFloat(b.price);
    if (sortBy === "price-desc")
      return parseFloat(b.price) - parseFloat(a.price);
    if (sortBy === "title-asc") return a.title.localeCompare(b.title);
    if (sortBy === "title-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  const paginatedBooks = sortedBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);

  return (
    <div className="w-full pb-10">
      {/* Filtres - Full Width */}
      <div className="w-full px-4">
        <Filtres
          category={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* Cards + Pagination - max-w-7xl */}
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {paginatedBooks.map((book, idx) => (
            <BookCard key={idx} {...book} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded border ${
                page === currentPage
                  ? "bg-[#b99272] text-white"
                  : "bg-white text-[#3a3a3a]"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
