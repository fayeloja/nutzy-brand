import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import Ourstory from "./pages/OurStory";
import Contact from "./pages/Contact";
import { lazy, Suspense } from "react";
const ReviewsCarousel = lazy(() => import("./components/ReviewsCarousel"));
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./pages/ProductDetails";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Ensures scroll resets on route change for better UX */}
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* Dynamic product route */}
        <Route path="/products/:slug" element={<ProductDetails />} />
        {/* Recipes routes */}
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:slug" element={<RecipeDetails />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Render ReviewsCarousel only on the home page */}
      <Suspense fallback={<div>Loading reviews...</div>}>
        <Routes>
          <Route path="/" element={<ReviewsCarousel />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
