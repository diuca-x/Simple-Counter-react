import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Timer from "./timer";
//create your first component
const Home = ({seconds}) => {
	const icon = {
		color: "color: #ffffff"
	}
	return (
		<>
			<div className="text-center container">
				<div className="row justify-content-center bg-dark">
					<div className="col-2 border  text-light"><i class="far fa-clock fa-lg"></i></div>
					<div className="col-1 border  text-light"><Timer seconds={seconds} interval={6}/></div>
					<div className="col-1 border  text-light"><Timer seconds={seconds} interval={5}/></div>
					<div className="col-1 border  text-light"><Timer seconds={seconds} interval={4}/></div>
					<div className="col-1 border  text-light"><Timer seconds={seconds} interval={3}/></div>
					<div className="col-1 border  text-light"><Timer seconds={seconds} interval={2}/></div>
					<div className="col-1 border  text-light"><Timer seconds={seconds} interval={1}/></div>
				</div>
			</div>
		</>
	);
};

export default Home;
