import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import NewPost from "./NewPost";
import UnauthenticatedUserApp from "./UnauthenticatedUserApp";

function Links() {
	const [sweets, setSweets] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);
	const [authChecked, setAuthChecked] = useState(false);

	useEffect(() => {
		fetch("/me").then((resp) => {
			if (resp.ok) {
				resp.json().then((user) => {
					setCurrentUser(user);
					setAuthChecked(true);
				});
			} else {
				setAuthChecked(true);
			}
		});
	}, []);

	function handlePostAdd(sweet) {
		fetch("/sweets", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(sweet),
		})
			.then((resp) => resp.json())
			.then((sweet) => {
				setSweets([...sweets, sweet]);
			});
	}

	if (!authChecked) {
		return <div>test</div>;
	}
	return currentUser ? (
		<div>
			<Router>
				<NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
				<Routes>
					<Route path="/" element={<Home currentUser={currentUser} />} />
					<Route path="/about" element={<About />} />
					<Route path="/new" element={<NewPost onPostAdd={handlePostAdd} />} />
				</Routes>
			</Router>
		</div>
	) : (
		<UnauthenticatedUserApp setCurrentUser={setCurrentUser} />
	);
}

export default Links;
