const spoonacularAPIKey = "583af1e089f24817ac6d7ae8a93c7e2b";

document.getElementById("generate-button").addEventListener("click", fetchRandomRecipe);

async function fetchRandomRecipe() {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKey}`);
    if (!response.ok) {
        throw new Error("Response status wasn't ok, was ${response.status}");
    }

    const data = await response.json();
    const recipe = data.recipes[0];

    document.getElementById("recipe-container").innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <p>${recipe.instructions}</p>
    `;
    } catch (error) {
        console.error("Error fetching the recipe:", error);
    }
}