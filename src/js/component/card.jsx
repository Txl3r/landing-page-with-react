import propTypes from "prop-types";
import React from "react";
const Cards = (props) => {
	let maria = {
		width: "18rem",
		margin: "0px 5px 0px 5px",
	};
	return (
		<div className="card" style={maria}>
			<img
				class="card-img-top"
				src="https://picsum.photos/200/300?random=1"
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<p className="card-text">
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</p>
				<a href={propTypes.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
Cards.propTypes = {
	title: propTypes.string,
	description: propTypes.string,
	buttonURL: propTypes.string,
	buttonLabel: propTypes.string,
};

export default Cards;
