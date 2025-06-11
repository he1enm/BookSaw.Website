import { Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
