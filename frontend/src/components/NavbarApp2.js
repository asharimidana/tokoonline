import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

function NavbarApp() {
	return (
		<header className="section-heade ">
			<section className="header-main border-bottom">
				<div className="container ">
					<div className="row  py-4 align-items-center">
						<div className="col-xl col-lg col-6 col-sm-6 col-md flex-grow-0">
							<Link href="#" className="brand-wrap me-3">
								<>
									<img className="logo" alt="logo" height={40} src={process.env.PUBLIC_URL + "/logo.png"} />
								</>
							</Link> {/* brand-wrap end.// */}
						</div> {/* col end.// */} <div className="col-xl col-lg col-6 col-sm-6 col-md flex-grow-0">
							<Dropdown>
								<Dropdown.Toggle variant="btn btn-sm btn-outline-primary text-nowrap" id="dropdown-basic">
									<i className="material-icons ">sort</i>
									<small className="mx-2 pb-5">sort</small>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="chart/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="/action-3">Something else</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div> {/* col end.// */}
						<div className="col-xl col-lg-4 col-12 col-sm-12 col-md">
							<form action="#" className="search mobile-p-y">
								<div className="input-group">
									<input type="search" className="form-control" style={{ width: '50%' }} placeholder="Search" />
									<button className="btn btn-primary bg-app">
										<i className="material-icons">search</i>
									</button>
								</div> {/* input-group end.// */}
							</form> {/* search-wrap end.// */}
						</div> {/* col end.// */}
					</div> {/* row end.// */}
				</div> {/* container end.// */}
			</section> {/* header-main end.// */}
		</header>
	);
}

export default NavbarApp;
