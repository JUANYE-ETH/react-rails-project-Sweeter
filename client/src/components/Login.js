import React, { useState } from "react";

const Login = ({ setCurrentUser }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function loginUser(e) {
		e.preventDefault();
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					setCurrentUser(user);
				});
			} else {
				res.json().then((errors) => {
					console.log(errors);
					alert("Invalid Username or Password");
				});
			}
		});
		setUsername("");
		setPassword("");
	}

	return (
		<div className="login">
			<h2 className="unauth-header">LOGIN</h2>
			<form onSubmit={loginUser}>
				<label>Username</label>
				<br />
				<input
					type="text"
					name="username"
					value={username}
					placeholder="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<label>Password</label>
				<br />
				<input
					type="password"
					name=""
					value={password}
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<button className="unauth-button">LOG IN</button>
			</form>
		</div>
	);
};

export default Login;
