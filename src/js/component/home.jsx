import React from "react";
import Nav from "./nav.jsx";
import Card from "./card.jsx";
import Jumbo from "./jumbo.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<Jumbo />
			<Card />
		</>
	);
};
export default Home;
