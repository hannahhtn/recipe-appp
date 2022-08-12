import React from "react";
import Recipes from "./Recipes";
import './NavBar.css'

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Daily Recipe
				</a>
				<div className="nav">
					<a className="nav-link active" aria-current="page" href="#">
						Random Recipe
					</a>
					<a className="nav-link" href="#">
						Login
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
