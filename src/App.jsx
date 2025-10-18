import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const ReviewsCarousel = lazy(() => import("./components/ReviewsCarousel"));

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Reset scroll on route change */}
      <ScrollToTop />

      {/* Fixed NavBar - ensure mobile top spacing */}
      <NavBar />

      {/* Main Content Wrapper to avoid overlap */}
      <main className="flex-grow pt-20 md:pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:slug" element={<RecipeDetails />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Show Reviews Carousel ONLY on Home */}
        {location.pathname === "/" && (
          <Suspense
            fallback={
              <div className="text-center py-10">Loading reviews...</div>
            }
          >
            <ReviewsCarousel />
          </Suspense>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
