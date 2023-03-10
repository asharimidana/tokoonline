import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
function NavbarApp() {
	return (
		<header className="section-heade ">
			<section className="header-main border-bottom">
				<div className="container ">
					<div className="row  py-4 align-items-center">
						<div className="col-xl col-lg col-6 col-sm-6 col-md flex-grow-0">
							<Link to={"/"} className="brand-wrap me-3">
								<>
									<img
										className="logo"
										alt="logo"
										height={40}
										src={process.env.PUBLIC_URL + "/logo.png"}
									/>
								</>
							</Link>{" "}
							{/* brand-wrap end.// */}
						</div>{" "}
						{/* col end.// */}{" "}
						<div className="col-xl col-lg col-6 col-sm-6 col-md flex-grow-0">
							<div className="dropdown float-end">
								<Dropdown>
									<Dropdown.Toggle
										variant="btn btn-sm btn-outline-primary text-nowrap"
										id="dropdown-basic"
									>
										<i className="material-icons ">sort</i>
										<small className="mx-2 pb-5">sort</small>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="chart/action-1">Action</Dropdown.Item>
										<Dropdown.Item href="/action-2">Another action</Dropdown.Item>
										<Dropdown.Item href="/action-3">Something else</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>{" "}
							{/* category-wrap end.// */}
						</div>{" "}
						{/* col end.// */}
						<div className="col-xl col-lg-4 col-12 col-sm-12 col-md">
							<form action="#" className="search mobile-p-y">
								<div className="input-group">
									<input
										type="search"
										className="form-control"
										style={{ width: "55%" }}
										placeholder="Search"
									/>
									<select className="form-select">
										<option value>All type </option>
										<option value="codex">Special</option>
										<option value="comments">Only best</option>
										<option value="content">Latest</option>
									</select>
									<button className="btn btn-primary bg-app">
										<i className="material-icons">search</i>
									</button>
								</div>{" "}
								{/* input-group end.// */}
							</form>{" "}
							{/* search-wrap end.// */}
						</div>{" "}
						{/* col end.// */}
						<div className="col-xl-4 col-lg col-md-12 col-12">
							<div className="d-flex justify-content-center">
								<div className="widget-header mx-2">
									<Link to="/cart" className="text-decoration-none btn-app-secondary text-center">
										<div className="icon-area">
											<i className="btn-app-md bi-cart-check-fill"></i>
											<span className="notify">1</span>
										</div>
									</Link>
								</div>
								<div className="widget-header mx-2">
									<Link href="#" className="text-decoration-none  btn-app-secondary text-center">
										<div className="icon-area">
											<i className="btn-app-md bi-chat-dots-fill"></i>
											<span className="notify">1</span>
										</div>
									</Link>
								</div>
								<div className="widget-header mx-2">
									<Link
										to="/user/profile"
										className="text-decoration-none btn-app-secondary text-center"
									>
										<div className="">
											<i className=" btn-app-md bi-person-fill "></i>
										</div>
									</Link>
								</div>
							</div>{" "}
							{/* widgets-wrap.// */}
						</div>{" "}
						{/* col end.// */}
					</div>{" "}
					{/* row end.// */}
				</div>{" "}
				{/* container end.// */}{" "}
			</section>{" "}
			{/* header-main end.// */}
			<nav className="navbar navbar-light bg-white shadow-sm navbar-expand">
				<div className="container">
					<ul className="navbar-nav flex-wrap">
						<li className="nav-item">
							<Link className="nav-link p-0 px-2" href="#">
								Sales
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link p-0 px-2" href="#">
								Electronic
							</Link>
						</li>
					</ul>
				</div>{" "}
				{/* container end.// */}
			</nav>{" "}
			{/* navbar-main end.// */}
		</header>
	);
}

export default NavbarApp;
