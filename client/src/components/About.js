import React from "react";

function About() {
	return (
		<div className="about">
			<h2 id="about">About Sweeter 🍬</h2>
			<div className="text">
				<p>
					This is an application that is designed to mimic the very basic
					functionality of twitter but sweeter. A user can create an account or
					login to their existing account, create a sweet (tweet) and read
					through current sweets that have been made by other users. The only
					caveat is that profanity is not allowed and positivity is extremely
					encouraged! When a user creates a new sweet, only then will that user
					have permission to edit or delete that post. An admin can have
					permission to edit or delete any post.
					<br />
					Thanks for visiting!
					{/* A user can also add any post to their favorite list and subsequently remove that item on the Favorites page. */}
				</p>
			</div>
		</div>
	);
}

export default About;
