import React, { useState } from "react";

function NewPost({ onPostAdd }) {
	const [sweet, setSweet] = useState("");
	const [category_id, setCategoryId] = useState("");

	function submitNewPost(e) {
		e.preventDefault();

		const NewSweet = {
			sweet: sweet,
			category_id: category_id,
		};

		onPostAdd(NewSweet);
		setSweet("");
		setCategoryId("");
	}

	function handleTextChange(e) {
		setSweet(e.target.value);
	}

	function handleCategoryChange(e) {
		setCategoryId(e.target.value);
	}

	return (
		<div className="new-item-page">
			<form onSubmit={submitNewPost} className="newpost">
				<h4 id="new-sweet">CREATE NEW SWEET</h4>
				<br />
				<input
					type="text"
					placeholder="What's on your mind?"
					className="item-description"
					id="description"
					onChange={handleTextChange}
					value={sweet}
				/>
				<label className="category">Pick a connotation </label>
				<select className="category-menu" onChange={handleCategoryChange}>
					<option id="category_id" value="">
						Select One
					</option>
					<option id="category_id" value="1">
						Positive
					</option>
					<option id="category_id" value="2">
						Neutral
					</option>
					<option id="category_id" value="3">
						Negative
					</option>
				</select>
				<br />
				<button className="add-btn">POST SWEET</button>
			</form>
		</div>
	);
}

export default NewPost;
