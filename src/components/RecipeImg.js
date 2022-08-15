import React from "react";
import './RecipeImg.css';

const RecipeImg = ({ img, title }) => {
	return (
		<img src={img} className="img-thumbnail" alt={title}></img>
	);
};

export default RecipeImg;
