import React from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import {getRecipeFromMistral} from './../ai';

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    // 'Chicken',
    // 'Oregaano',
    // 'Tomatoes',
  ]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  // Scroll to the recipe section when it is updated
  // and the recipeSection ref is set
  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientsList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />}
      {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  );
}
