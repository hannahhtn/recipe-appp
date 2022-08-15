import React from "react";
const uuid = require("uuid");

const Ingredients = ({ ingredients }) => {
	return (
		<ul className="ingredient">
			{ingredients.map((item) => {
				return <li key={uuid.v4()}>{item}</li>;
			})}
		</ul>
	);
};
 
export default Ingredients;