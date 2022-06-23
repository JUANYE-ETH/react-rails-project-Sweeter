import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

function Home({ currentUser }) {
	const [sweets, setSweets] = useState([]);

	useEffect(() => {
		fetch("/sweets")
			.then((resp) => resp.json())
			.then((sweets) => setSweets(sweets));
	}, [setSweets]);

	function handlePostDelete(id) {
		const updatedSweets = sweets.filter((sweet) => sweet.id !== id);
		setSweets(updatedSweets);
	}

	function handleEditPost(updatedPost) {
		const updatedSweet = sweets.map((sweet) => {
			if (sweet.id === updatedPost.id) {
				return updatedPost;
			} else {
				return sweet;
			}
		});
		setSweets(updatedSweet);
	}

	// function handleSortAlpha() {
	// 	fetch("/sweets_by_order")
	// 		.then((resp) => resp.json())
	// 		.then((sweets) => setSweets(sweets));
	// }

	function handleSortDate() {
		fetch("/sweets_by_date")
			.then((resp) => resp.json())
			.then((sweets) => setSweets(sweets));
	}

	return (
		<div className="authpage">
			<div className="header">
				<h2 id="mylist-header">Sweet Feed</h2>
				<h3 className="user_welcome">
					Welcome{" "}
					{currentUser.username[0].toUpperCase() +
						currentUser.username.substring(1)}
					!
				</h3>
			</div>
			<div className="filter-buttons">
				{/* <button onClick={handleSortAlpha} className="filter-alpha">
					FILTER A-Z
				</button> */}
				<br />
				<button onClick={handleSortDate} className="filter">
					FILTER BY DATE
				</button>
			</div>
			{sweets.map((sweet) => (
				<PostItem
					key={sweet.id}
					post={sweet}
					onItemDelete={handlePostDelete}
					onEditItem={handleEditPost}
					setSweets={setSweets}
					currentUser={currentUser}
				/>
			))}
		</div>
	);
}

export default Home;
