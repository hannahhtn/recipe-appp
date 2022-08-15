import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const RecipeBtn = ({ onRecipeRequest }) => {
	return (
		<div>
			<button
				onClick={onRecipeRequest}
				type="button"
				className="btn btn-outline-light mt-3"
			>
				Random Recipe
			</button>
		</div>
	);
};

export default RecipeBtn;
