import { Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop.tsx";
import SingleBook from "./pages/SingleBook.tsx";

function App() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/book" element={<SingleBook />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
