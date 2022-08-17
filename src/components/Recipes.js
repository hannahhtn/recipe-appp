import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Recipes extends Component {
	state = {
		recipeTitle: "",
		recipeImg: "",
		recipeInstruction: [],
		recipeIngredients: [],
		searchKeyWord: "",
		recipeKeyWord: "",
		meals: [],
		showListOfMeals: false,
		pageFirstLoad: true
	};

	handleRandomSearchRequest = () => {
		fetch("https://www.themealdb.com/api/json/v1/1/random.php")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({ recipeTitle: data.meals[0].strMeal });
				this.setState({ recipeImg: data.meals[0].strMealThumb });
				this.setState({ recipeID: data.meals[0].idMeal });
				const array = data.meals[0].strInstructions.split(/\r?\n/);
				this.setState({
					recipeInstruction: array,
				});

				const ingredients = [];
				for (const [key, value] of Object.entries(data.meals[0])) {
					if (key.includes("strMeasure") && value.length !== 0) {
						// not including empty measurement
						if (value[0] !== " ") {
							ingredients.push(value);
						}
					}
				}

				let indx = 0;
				for (const [key, value] of Object.entries(data.meals[0])) {
					if (key.includes("strIngredient") && value.length !== 0) {
						ingredients[indx] += ` ${value}`;
						indx++;
					}
				}

				this.setState({ recipeIngredients: ingredients });
			});
		console.log("111");
	};
}

export default Recipes;
