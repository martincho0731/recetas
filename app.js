
const recipes = [
    { name: "Panqueques", calories: 200 },
    { name: "Ensalada de frutas", calories: 150 },
    { name: "Tostadas con palta", calories: 250 },
    { name: "Sopa de verduras", calories: 100 }
];

document.addEventListener("DOMContentLoaded", () => {
    const desayunoSelect = document.getElementById("desayunoSelect");
    const almuerzoSelect = document.getElementById("almuerzoSelect");
    const meriendaSelect = document.getElementById("meriendaSelect");
    const cenaSelect = document.getElementById("cenaSelect");
    const resumenCalorias = document.getElementById("resumenCalorias");

    const loadRecipes = () => {
        recipes.forEach(recipe => {
            const option = document.createElement("option");
            option.value = recipe.name;
            option.textContent = `${recipe.name} (${recipe.calories} cal)`;
            desayunoSelect.appendChild(option.cloneNode(true));
            almuerzoSelect.appendChild(option.cloneNode(true));
            meriendaSelect.appendChild(option.cloneNode(true));
            cenaSelect.appendChild(option.cloneNode(true));
        });
    };

    const addMeal = (meal, select) => {
        const selectedValue = select.value;
        const recipe = recipes.find(r => r.name === selectedValue);
        if (recipe) {
            const li = document.createElement("li");
            li.textContent = `${meal}: ${recipe.name} (${recipe.calories} cal)`;
            resumenCalorias.appendChild(li);

            let storedCalories = localStorage.getItem("totalCalories");
            storedCalories = storedCalories ? parseInt(storedCalories) : 0;
            localStorage.setItem("totalCalories", storedCalories + recipe.calories);
        }
    };

    document.getElementById("desayunoAgregar").addEventListener("click", () => addMeal("Desayuno", desayunoSelect));
    document.getElementById("almuerzoAgregar").addEventListener("click", () => addMeal("Almuerzo", almuerzoSelect));
    document.getElementById("meriendaAgregar").addEventListener("click", () => addMeal("Merienda", meriendaSelect));
    document.getElementById("cenaAgregar").addEventListener("click", () => addMeal("Cena", cenaSelect));

    loadRecipes();
});