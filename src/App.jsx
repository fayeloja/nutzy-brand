import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import RecipeDetail from "./pages/RecipeDetail";
import Products from "./pages/Products";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import ReviewsCarousel from "./components/ReviewsCarousel";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./pages/ProductDetails";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {/* ScrollToTop resets scroll position on route change.
          In SPAs, navigation does not trigger a full page reload,
          so scroll position can persist between pages. This component
          ensures users always start at the top of a new page, improving UX. */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* Dynamic product route */}
        <Route path="/products/:slug" element={<ProductDetails />} />

        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        {/* Recipes routes */}
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:slug" element={<RecipeDetails />} />
      </Routes>
      <ReviewsCarousel />
      <Footer />
    </div>
  );
}

export default App;
