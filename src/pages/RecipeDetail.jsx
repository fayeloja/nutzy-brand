// src/pages/RecipeDetail.jsx
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { slug } = useParams();

  return (
    <div className="p-6 mt-24">
      <h1 className="text-3xl font-bold">Recipe: {slug.replace("-", " ")}</h1>
      <p className="mt-4">Here you can display full recipe content...</p>
    </div>
  );
}

export default RecipeDetail;
