import NavbarApp from "../components/NavbarApp";
import Footer from "../components/Footer";

import SideBar from "../components/userComponent/SideBar";
import OrderStatus from "../components/userComponent/OrderStatus";

import { useParams } from "react-router-dom";
function Order() {
	let { category } = useParams();
	return (
		<div>
			{<NavbarApp />}
			<div className=" pe-3">
				<div className="row p-0 m-0">
					{<SideBar />}
					<div className="col-lg-10 bg py-3 rounded bg-light">
						{category == "dibayar" ? <OrderStatus /> : ""}
					</div>
				</div>
			</div>
			{category}
			{<Footer />}
		</div>
	);
}
export default Order;
