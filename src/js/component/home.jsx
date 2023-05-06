import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Timer from "./timer";
//create your first component
const Home = ({seconds}) => {
	const icon = {
		color: "color: #ffffff"

	}
	const box_styles = {
		height: "9vw",
		width: "6vw"
	}
	const icon_style = {
		fontSize: "3vw"
	}
	return (
		<>
			<div className="text-center container">
				<div className="row justify-content-center align-items-center bg-black rounded mt-5 ">
					<div className="col-2  text-light d-flex justify-content-end me-5"><div className="d-flex bg-dark  rounded align-items-center justify-content-center my-2 " style={box_styles}><i className="far fa-clock fa-3x " style={icon_style}></i></div></div>
					<div className="col-1 d-flex text-light"><div className="d-flex  bg-dark  rounded align-items-center justify-content-center my-2" style={box_styles}><Timer seconds={seconds} interval={6}/></div></div>
					<div className="col-1 d-flex text-light"><div className="d-flex  bg-dark  rounded align-items-center justify-content-center my-2" style={box_styles}><Timer seconds={seconds} interval={5}/></div></div>
					<div className="col-1 d-flex text-light"><div className="d-flex  bg-dark  rounded align-items-center justify-content-center my-2" style={box_styles}><Timer seconds={seconds} interval={4}/></div></div>
					<div className="col-1 d-flex text-light"><div className="d-flex  bg-dark  rounded align-items-center justify-content-center my-2" style={box_styles}><Timer seconds={seconds} interval={3}/></div></div>
					<div className="col-1 d-flex text-light"><div className="d-flex  bg-dark  rounded align-items-center justify-content-center my-2" style={box_styles}><Timer seconds={seconds} interval={2}/></div></div>
					<div className="col-1 d-flex text-light"><div className="d-flex  bg-dark  rounded align-items-center justify-content-center my-2" style={box_styles}><Timer seconds={seconds} interval={1}/></div></div>
				</div>
			</div>
		</>
	);
};

export default Home;
