import React from "react";
import Nav from "./nav.jsx";
import Card from "./card.jsx";
import Jumbo from "./jumbo.jsx";
import Footer from "./footer.jsx";
import propTypes from "prop-types";
//create your first component
const Home = (props) => {
	return (
		<>
			<Nav />
			<div className="container">
				<Jumbo />
				<div className="card-group">
					<Card
						title="card-title"
						description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						buttonLabel="Go somewhere"
					/>
					<Card
						title="card-title"
						description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						buttonLabel="Go somewhere"
					/>
					<Card
						title="card-title"
						description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						buttonLabel="Go somewhere"
					/>
					<Card
						title="card-title"
						description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						buttonLabel="Go somewhere"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default Home;
