import Banner from "../components/Banner.js";
import ListProduct from "../components/ListProduct.js";
import ListProductSpecial from "../components/ListProductSpecial.js";
import ListProductAll from "../components/ListProductAll.js";
import Footer from "../components/Footer.js";
import NavbarApp from "../components/NavbarApp.js";
// import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div >
			{< NavbarApp />}
			{< Banner />}
			{< ListProduct />}
			{< ListProductSpecial />}
			<h2 className="text-center text-app py-4 d-flex justify-content-center">
				<div className="mt-3 mr-3" style={{ "width": "10rem", "height": "1px", backgroundColor: "blue" }}></div>
				<div className="px-4">Produk Terbaru</div>
				<div className="mt-3 mr-3" style={{ "width": "10rem", "height": "1px", backgroundColor: "blue" }}></div>
			</h2>
			{< ListProductAll />}
			{< ListProductAll />}
			{< ListProductAll />}
			{< Footer />}
		</div>
	)
}

export default HomePage;
