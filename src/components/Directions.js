import React from "react";
const uuid = require("uuid");

const Directions = ({ instructions }) => {
	return (
		<ul className="direction">
			{instructions.map((item) => {
				return <li key={uuid.v4()}>{item}</li>;
			})}
		</ul>
	);
};
 
export default Directions;