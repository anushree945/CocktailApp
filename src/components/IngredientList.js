const IngredientList = (ingredientsList) => {
    const liItems = ingredientsList.ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
    });
    return (  
        <ol>
            {liItems}
        </ol>
    );
}
 
export default IngredientList;