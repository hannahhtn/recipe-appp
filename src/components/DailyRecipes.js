import React from "react";
import Recipes from "./Recipes";
import Directions from "./Directions";
import Ingredients from "./Ingredients";
import RecipeBtn from "./RecipeBtn";
import RecipeImg from "./RecipeImg";
import NavBar from "./NavBar";
import "./DailyRecipes.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const uuid = require("uuid");

class DailyRecipes extends Recipes {

	handleRecipeRequest = () => {
		this.setState({ pageFirstLoad : false});
		this.handleRandomSearchRequest();
	};

	handleSearchKeyWords = (event) => {
		this.setState({ searchKeyWord: event.target.value });
	};

	handleSearchRequest = async (event) => {
		event.preventDefault();
		if (this.state.searchKeyWord.length !== 0) {
			fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.searchKeyWord}`
			)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					if (data.meals !== null) {
						this.setState({ meals: data.meals }, () => {
							console.log(this.state.meals);
						});
					} else {
						this.setState({ meals: [] });
					}
				});
			const keyword = this.state.searchKeyWord;
			this.setState({ recipeKeyWord: keyword });
			this.setState({ showListOfMeals: true });
			this.setState({ pageFirstLoad: false });
		} else {
			toast.error("Search field is empty!");
		}
	};

	handleSearchRequestById = (e, id) => {
		e.preventDefault();
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
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
				window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
			});
		this.setState({ showListOfMeals: false });
	};

	render() {
		const {
			recipeImg,
			recipeTitle,
			recipeInstruction,
			recipeIngredients,
			meals,
			showListOfMeals,
			recipeKeyWord,
			pageFirstLoad
		} = this.state;
		return (
			<div>
				<NavBar
					onSearchKeyWords={this.handleSearchKeyWords}
					onSearchRequest={this.handleSearchRequest}
				/>
				<ToastContainer />
				{!showListOfMeals && <h1>{recipeTitle}</h1>}
				{pageFirstLoad && <h1>Ready for your daily recipe?</h1>}
				{!showListOfMeals && (
					<div className="recipe-container">
						<div className="img-n-ingredients">
							<div className="img-container">
								{!pageFirstLoad && (
									<RecipeImg img={recipeImg} title={recipeTitle} />
								)}
								<RecipeBtn onRecipeRequest={this.handleRecipeRequest} />
							</div>
							{!pageFirstLoad && (
								<div className="ingredients-container">
									<h2>Ingredients</h2>
									<Ingredients
										className="ingredients"
										ingredients={recipeIngredients}
									/>
								</div>
							)}
						</div>

						{!pageFirstLoad && (
							<div className="directions-container">
								<h2>Directions</h2>
								<Directions instructions={recipeInstruction} />
							</div>
						)}
					</div>
				)}
				{showListOfMeals && (
					<div>
						<h1>{`${meals.length} meals match the search keyword "${recipeKeyWord}"`}</h1>
						<div className="meal-list">
							{meals.length !== 0 &&
								meals.map((item) => {
									return (
										<div className="item-list" key={uuid.v4()}>
											<img
												src={item.strMealThumb}
												className="img-thumbnail img-item-list"
												alt={item.strMeal}
												onClick={(event) =>
													this.handleSearchRequestById(event, item.idMeal)
												}
											></img>
											<a
												className="item-url"
												href="##"
												onClick={(event) =>
													this.handleSearchRequestById(event, item.idMeal)
												}
											>
												{item.strMeal}
											</a>
										</div>
									);
								})}
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default DailyRecipes;
