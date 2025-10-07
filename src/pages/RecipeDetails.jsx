// src/pages/RecipeDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {
  const { slug } = useParams();
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-600">Recipe Not Found</h2>
        <Link to="/recipes" className="text-blue-600 underline mt-4 block">
          Go back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:mt-40">
      {/* Hero Section */}
      <div className="mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-6 text-center text-accent-red">
          {recipe.title}
        </h1>
        <p className="text-gray-500 text-center mt-2">{recipe.date}</p>
      </div>

      {/* Description */}
      <p className="text-lg text-center text-gray-700 mb-10">
        {recipe.description}
      </p>

      {/* Ingredients */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-accent-red mb-4">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="text-2xl font-semibold text-accent-red mb-4">
          Instructions
        </h2>
        <ol className="list-decimal list-inside text-gray-800 space-y-3">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Back Button */}
      <div className="text-center mt-12">
        <Link
          to="/recipes"
          className="bg-accent-red text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          ← Back to Recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
