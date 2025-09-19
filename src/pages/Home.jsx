import Hero from "../components/Hero";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import RecipesCarousel from "../components/RecipesCarousel";
import ReviewsCarousel from "../components/ReviewsCarousel";

function Home() {
  return (
    <>
      <Hero />
      <Content />
      <RecipesCarousel />
    </>
  );
}

export default Home;
