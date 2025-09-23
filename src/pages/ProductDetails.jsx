import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    slug: "nutzy-peanut-butter",
    name: "Nutzy Peanut Butter",
    description: "Creamy, delicious and packed with protein.",
    image: "/images/peanut-butter.jpg",
  },
  {
    slug: "nutzy-crispy-peanut-snacks",
    name: "Nutzy Crispy Peanut Snacks",
    description: "Crunchy peanuts roasted to perfection.",
    image: "/images/crispy-peanuts.jpg",
  },
];

function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <h2 className="text-center mt-20">Product not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
      <p className="mt-4 text-gray-700">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
