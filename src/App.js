import React, { Component } from "react";
import "./App.css";
import Recipes from "./components/Recipes";
import DailyRecipes from './components/DailyRecipes';

class App extends Component {
	state = {};

	render() {
		return (
			<div className="App">
				<DailyRecipes />
			</div>
		);
	}
}

export default App;
