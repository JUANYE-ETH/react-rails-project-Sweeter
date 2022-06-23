import React from "react";

function FavSweets({ post, onUnFav }) {
	const { id, sweet, user_id } = post;

	function handleUnFav() {
		fetch(`/sweets/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ isFavorite: false }),
		})
			.then((resp) => resp.json())
			.then((favSweet) => onUnFav(favSweet));
	}

	return (
		<div>
			<ul>
				<h3>{sweet}</h3>
				<h4>{user_id}</h4>
				<button onClick={handleUnFav}>Remove From Favorites</button>
			</ul>
		</div>
	);
}

export default FavSweets;
