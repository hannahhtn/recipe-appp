import React from "react";

import './NavBar.css'

const NavBar = ({ onSearchKeyWords, onSearchRequest }) => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<a
						className="navbar-brand"
						onClick={() => {
							window.location.reload(false);
						}}
					>
						Daily Recipe
					</a>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search recipe by name"
							aria-label="Search"
							onChange={onSearchKeyWords}
							autoComplete="on"
						/>
						<button
							className="btn btn-outline-light"
							type="submit"
							onSubmit={onSearchRequest}
							onClick={onSearchRequest}
						>
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
