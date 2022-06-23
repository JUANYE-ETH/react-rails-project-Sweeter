import React, { useState } from "react";
// import { UserContext } from "./UserContext";

function EditForm({ onEditItem, post, toggleEditItem }) {
	const { id, sweet } = post;
	const [updatedSweet, setUpdatedSweet] = useState(sweet);

	function handleFormSubmit(e) {
		e.preventDefault();
		toggleEditItem();

		fetch(`/sweets/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				sweet: updatedSweet,
			}),
		})
			.then((r) => r.json())
			.then((updatedSweet) => {
				onEditItem(updatedSweet);
			});
	}

	return (
		<div>
			<form className="edit">
				<input
					className="description-field"
					type="text"
					placeholder={sweet}
					value={updatedSweet}
					onChange={(e) => setUpdatedSweet(e.target.value)}
				></input>

				<br />

				<button type="submit" className="edit-btn" onClick={handleFormSubmit}>
					{" "}
					Confirm Edit
				</button>
			</form>
		</div>
	);
}

export default EditForm;
