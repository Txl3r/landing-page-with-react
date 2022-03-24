import React from "react";
import Nav from "./nav.jsx";
import Card from "./card.jsx";
import Jumbo from "./jumbo.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<Jumbo />
			<div className="card-group">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</>
	);
};
export default Home;
