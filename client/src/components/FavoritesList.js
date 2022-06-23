import React from "react";
import FavSweets from "./FavSweets";

function FavoritesList({ sweets, onUnFav }) {
	const favSweets = sweets.map((sweet) => (
		<FavSweets sweet={sweet} key={sweet.id} onUnFav={onUnFav} />
	));
	return (
		<div className="fav-list">
			<h3>Favorite Items</h3>
			{favSweets}
		</div>
	);
}
export default FavoritesList;
