import HeroCarousel from "../components/Home/HeroCarousel";
import ClientHolder from "../components/Home/ClientHolder";
import FeaturedBooks from "../components/Home/FeaturedBooks";
import BestSelling from "../components/Home/BestSelling";
import PopularBooks from "../components/Home/PopularBooks";
import BooksOffer from "../components/Home/BooksOffer";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ClientHolder />
      <FeaturedBooks />
      <BestSelling />
      <PopularBooks />
      <BooksOffer />
    </>
  );
}
