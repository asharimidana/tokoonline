// import React, { useState, useEffect } from "react";
// import Sidebar from "../components/SideBar";
// import MhsList from "./MhsList.js";
import Banner from "../components/Banner.js";
import ListProduct from "../components/ListProduct.js";
// import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div >
			{< Banner />}
			{< ListProduct />}
		</div>
	)
}

export default HomePage;
