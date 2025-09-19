import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import RecipeDetail from "./pages/RecipeDetail";
import Products from "./pages/Products";
import Ourstory from "./pages/Ourstory";
import Contact from "./pages/Contact";
import ReviewsCarousel from "./components/ReviewsCarousel";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <ScrollToTop /> {/* 👈 This ensures scroll resets */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes/:slug" element={<RecipeDetail />} />
      </Routes>
      <ReviewsCarousel />
      <Footer />
    </div>
  );
}

export default App;
