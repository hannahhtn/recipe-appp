import React, { Component } from "react";
import "./App.css";
import Recipes from "./components/Recipes";

class App extends Component {
	state = {};

	render() {
		return (
			<div className="App">
				<Recipes />
			</div>
		);
	}
}

export default App;
