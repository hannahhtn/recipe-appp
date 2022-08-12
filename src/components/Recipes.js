import React, { Component } from "react";
import RecipeBtn from "./RecipeBtn";
import "./Recipes.css";

class Recipes extends Component {
	state = {
		recipeTitle: "",
		recipeImg: "",
		recipeInstruction: [],
	};

	componentDidMount() {
		fetch("https://www.themealdb.com/api/json/v1/1/random.php")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				this.setState({ recipeTitle: data.meals[0].strMeal });
				this.setState({ recipeImg: data.meals[0].strMealThumb });
				this.setState({ recipeID: data.meals[0].idMeal });
                const array = data.meals[0].strInstructions.split(/\r?\n/);
				this.setState({
					recipeInstruction: array
				});
                console.log(array);
			});
	}

	handleRecipeRequest = async () => {
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
			});
	};

	render() {
		return (
			<div className="container">
				<div>
					<h1>{this.state.recipeTitle}</h1>
					<img
						src={this.state.recipeImg}
						className="img-thumbnail"
						alt={this.state.recipeTitle}
					></img>
					<RecipeBtn onRecipeRequest={this.handleRecipeRequest} />
				</div>
				<div>
					{this.state.recipeInstruction.map((item) => {
						return <p key={this.state.recipeInstruction.indexOf(item)}>{item}</p>;
					})}
				</div>
			</div>
		);
	}
}

export default Recipes;
