import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import RecipesCarousel from "../components/RecipesCarousel";

function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center mt-40">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <Link
          to="/products"
          className="mt-4 inline-block text-accent-red hover:underline"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 md:py-20 md:mt-40">
        {/* Top section: product image + info */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <img
              src={product.productimage}
              alt={product.name}
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>

          <div>
            {/* Brand logo */}
            {product.brandlogo && (
              <img
                src={product.brandlogo}
                alt="Brand logo"
                className="w-32 mb-4"
              />
            )}

            <h1 className="text-4xl font-extrabold text-primary mb-4">
              {product.name}
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Available sizes */}
            {product.availablesizes && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Available Sizes:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.availablesizes.map((size, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <a
              href="#order"
              className="inline-block mt-6 bg-accent-red text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition"
            >
              {product.cta || "Grab Yours Today"}
            </a>

            <div className="mt-8">
              <Link
                to="/products"
                className="text-accent-red hover:underline font-medium"
              >
                ← Back to Products
              </Link>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        {product.ingredients && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Ingredients
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.ingredients}
            </p>
          </div>
        )}

        {/* Nutrition info */}
        {product.nutritionimage && (
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-primary mb-8">
              Nutritional Information
            </h2>
            <img
              src={product.nutritionimage}
              alt={`${product.name} nutrition facts`}
              className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            />
          </div>
        )}
      </div>

      <RecipesCarousel />
    </>
  );
}

export default ProductDetails;
