import NavbarApp from "../components/NavbarApp";
import Footer from "../components/Footer";

import Profile from "../components/userComponent/Profile";
import SideBar from "../components/userComponent/SideBar";
import Address from "../components/userComponent/Address";

import { useParams } from "react-router-dom";
function UserDasboard() {
	let { id, category } = useParams();
	return (
		<div>
			{<NavbarApp />}
			<div className=" pe-3">
				<div className="row p-0 m-0">
					{<SideBar />}
					<div className="col-lg-10 bg py-3 rounded bg-light">
						{id == "profile" ? <Profile /> : ""}
						{id == "address" ? <Address /> : ""}
						{id == "notifications" ? <Address /> : ""}
						{id == "password" ? <Address /> : ""}
					</div>
				</div>
			</div>
			{category}
			{<Footer />}
		</div>
	);
}
export default UserDasboard;
