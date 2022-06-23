import React, { useState } from "react";
import EditForm from "./EditForm";

const PostItem = ({ post, onItemDelete, onEditItem, currentUser }) => {
	const [showEdit, setShowEdit] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	const { id, sweet, user, category, user_can_modify } = post;

	function toggleEditItem() {
		setShowEdit(!showEdit);
	}

	function submitNewEdit(updatedPost) {
		onEditItem(updatedPost);
	}

	function handleDelete() {
		fetch(`sweets/${id}`, {
			method: "DELETE",
		}).then((r) => {
			if (r.ok) {
				onItemDelete(id);
			}
		});
	}

	function handleFavorite() {
		setIsFavorite(!isFavorite);
	}

	return (
		<div className="each_post">
			<h4>{sweet}</h4>
			<h4>Connotation = {category.category_type}</h4>
			<h3>@{user.username}</h3>

			{showEdit ? (
				<EditForm
					onEditItem={submitNewEdit}
					post={post}
					toggleEditItem={toggleEditItem}
				/>
			) : null}

			{user_can_modify ? (
				<div>
					<button onClick={toggleEditItem} className="each-post-btn">
						EDIT ITEM
					</button>
					<button onClick={handleDelete} className="each-post-btn">
						DELETE
					</button>
				</div>
			) : null}

			{isFavorite ? (
				<button onClick={handleFavorite} className="each-post-btn">
					💜
				</button>
			) : (
				<button onClick={handleFavorite} className="each-post-btn">
					♡
				</button>
			)}

			<div className="separator">
				______________________________________________________________
			</div>
		</div>
	);
};

export default PostItem;
