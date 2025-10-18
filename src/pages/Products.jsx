import React from "react";
import ProductHero from "../components/ProductHero";
import ProductContent from "../components/ProductContent";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <ProductHero />
      <div className="container mx-auto md:px-20">
        <ProductContent />
      </div>
    </>
  );
}

export default Products;
