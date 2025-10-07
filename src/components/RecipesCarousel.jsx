import React from "react";
import Slider from "react-slick";
import recipes from "../data/recipes";
import { Link } from "react-router-dom";

function RecipesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-center mb-20 text-accent-red ">NUTZY RECIPES</h1>
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <div key={recipe.id} className="px-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden lazyloading">
                <Link to={`/recipes/${recipe.slug}`}>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <h3 className="font-stretch-extra-expandedbold uppercase p-4">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-accent-red px-4 pb-4">
                    {recipe.date}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default RecipesCarousel;
