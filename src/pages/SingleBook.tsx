import BookDetails from "../components/Single Book/BookDetails";
// import RecommendedCarousel from "../components/Single Book/RecommendedCarousel";
import img1 from "/src/assets/img/product-item1.jpg";

export default function Home() {
  return (
    <>
      <BookDetails
        image={img1}
        title="Birds Gonna Be Happy"
        author="Marmik Lama"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu."
        price="59.99"
        oldPrice="79.99"
        category={["Buisness"]}
        inStock={true}
      />

      {/* Caruselul Recomandărilor */}
    </>
  );
}
