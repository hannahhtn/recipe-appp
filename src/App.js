import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";

class App extends Component {
	state = {};

	render() {
		return (
			<div className="App">
				<NavBar />
				<Recipes />
			</div>
		);
	}
}

export default App;
