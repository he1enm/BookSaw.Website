import type { Book } from "../Models/Book";

import img1 from "../assets/img/tab-item1.jpg";
import img2 from "../assets/img/tab-item2.jpg";
import img3 from "../assets/img/tab-item3.jpg";
import img4 from "../assets/img/tab-item4.jpg";
import img5 from "../assets/img/tab-item5.jpg";
import img6 from "../assets/img/tab-item6.jpg";
import img7 from "../assets/img/tab-item7.jpg";
import img8 from "../assets/img/tab-item8.jpg";

export const POPULAR_BOOKS: Book[] = [
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
