// src/components/RecipeCard.jsx
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-2">{recipe.name}</h3>
      <Link
        to={`/recipe/${recipe.id}`}
        className="text-blue-500 mt-2 inline-block"
      >
        View Recipe
      </Link>
    </div>
  );
}

export default RecipeCard;
