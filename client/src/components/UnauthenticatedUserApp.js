import React from "react";

import Login from "./Login";
import Signup from "./Signup";

function UnauthenticatedUserApp({ setCurrentUser }) {
	return (
		<div className="unauthpage">
			<h1 className="welcome_header">Welcome to Sweeter! 🍬</h1>
			<Login setCurrentUser={setCurrentUser} />
			<h3 id="or">OR</h3>
			<Signup setCurrentUser={setCurrentUser} />
		</div>
	);
}

export default UnauthenticatedUserApp;
