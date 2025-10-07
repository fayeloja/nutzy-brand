import React from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes"; // Each recipe should be an object with: { slug, image, title, date }

function Recipes() {
  return (
    <div className="bg-white">
      {/* 🥜 Hero Section */}
      <section
        className="w-full md:h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/recipe-hero-banner.jpg')" }} // replace with a Nutzy banner
      >
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Nutzy Recipes
        </h1>
        <p className="text-xl md:text-2xl mt-4 font-medium">
          Delicious. Nutritious. Made with love ❤️
        </p>
      </section>

      {/* 🧁 Recipes Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-accent-red mb-16">
          Explore Our Recipes
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.slug}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{recipe.date}</p>
                </div>

                <Link
                  to={`/recipes/${recipe.slug}`}
                  className="mt-6 inline-block text-center bg-accent-red text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Recipes;
