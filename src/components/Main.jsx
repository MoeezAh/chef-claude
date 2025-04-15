import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    // 'Chicken',
    // 'Oregaano',
    // 'Tomatoes',
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function toggleRecipeShown() {
    setRecipeShown((isShown) => !isShown);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregone"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggle={toggleRecipeShown} />}
      {recipeShown == true && <ClaudeRecipe />}
    </main>
  );
}
