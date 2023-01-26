import { NavLink } from "react-router-dom";
function SideBar() {
	return (
		<div className="col-lg-2 px-2 border">
			<div className="card p-2 rounded border border-0">
				<div className="ps-2">
					<div className="pt-3 d-block">
						<img
							src="https://asharimidana.github.io/profil.jpg"
							alt="Profile"
							className="icon-img-lg text-center mx-auto rounded-circle d-block"
						/>
						<div className="text-center">Ashari Midana</div>
						<small className="  d-block text-center text-muted">085395499307</small>
					</div>
					<hr className="pb-0 my-1" />
				</div>
				<nav className="nav flex-column nav-pills hov-link">
					<NavLink to="/user/profile" className="nav-link text-muted d-flex justify-content-start">
						<i className="material-icons me-1">account_box</i>
						<div>Profile</div>
					</NavLink>
					<NavLink to="/user/address" className="nav-link text-muted d-flex justify-content-start">
						<i className="material-icons me-1">location_city</i>
						<div>Alamat</div>
					</NavLink>
					<NavLink to="/user/shop" className="nav-link text-muted d-flex justify-content-start">
						<i className="material-icons me-1">shopping_cart</i>
						<div>Pesanan</div>
					</NavLink>
					<NavLink to="/user/notification" className="nav-link text-muted d-flex justify-content-start">
						<i className="material-icons me-1">notifications</i>
						<div>Notifikasi</div>
					</NavLink>
					<NavLink to="/user/password" className="nav-link text-muted d-flex justify-content-start">
						<i className="material-icons me-1">lock</i>
						<div>Ubah Password</div>
					</NavLink>
				</nav>
			</div>
		</div>
	);
}
export default SideBar;
