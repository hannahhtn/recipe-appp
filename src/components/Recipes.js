import React, { Component } from "react";
import RecipeBtn from "./RecipeBtn";
import './Recipes.css';

class Recipes extends Component {
	state = {
		recipeTitle: "",
		recipeImg: "",
	};

	componentDidMount() {
		fetch("https://www.themealdb.com/api/json/v1/1/random.php")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// this.setState({ recipeTitle: data.recipes[0].title });
				// this.setState({ recipeImg: data.recipes[0].image });
				this.setState({ recipeTitle: data.meals[0].strMeal });
				this.setState({ recipeImg: data.meals[0].strMealThumb });
			});
	}

	handleRecipeRequest = async () => {
		// https://www.themealdb.com/api/json/v1/1/random.php
		// fetch(
		// 	`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
		// )
		fetch("https://www.themealdb.com/api/json/v1/1/random.php")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// this.setState({ recipeTitle: data.recipes[0].title });
				// this.setState({ recipeImg: data.recipes[0].image });
                this.setState({ recipeTitle: data.meals[0].strMeal });
				this.setState({ recipeImg: data.meals[0].strMealThumb });
			});
	};

	render() {
		return (
			<div>
				<h1>{this.state.recipeTitle}</h1>
				<img
					src={this.state.recipeImg}
					className="img-thumbnail"
					alt={this.state.recipeTitle}
				></img>
				<RecipeBtn onRecipeRequest={this.handleRecipeRequest} />
			</div>
		);
	}
}

export default Recipes;
