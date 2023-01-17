import { Link } from "react-router-dom";
function Footer() {
	return (
		<div className="pt-3 bg-app">
			<div className="container ">
				<div className="row text-mutted">
					<div className="col-lg-4 text-app-footer">
						<p className="fw-bold text-white">Contact us</p>
						<p >Jalan xxx.dddd.kota kendari-Sulawesi Tenggara</p>
						<p >085395499307 / 0123456789012</p>
						<p >email@gmail.com</p>
					</div>
					<div className="col-lg-2 text-app-footer">
						<p className="fw-bold text-white">Company</p>
						<p>
							<Link className="text-decoration-none">Help Center</Link>
						</p>
						<p>
							<Link className="text-decoration-none">Money refund</Link>
						</p>
						<p>
							<Link >Shipping info</Link>
						</p>
						<p>
							<Link >Refunds</Link>
						</p>
					</div>
					<div className="col-lg-2 text-app-footer">
						<p className="fw-bold text-white">Service</p>
						<p>
							<Link className="text-decoration-none">Help Center</Link>
						</p>
						<p>
							<Link className="text-decoration-none">Money refund</Link>
						</p>
						<p>
							<Link className="text-decoration-none">Order status</Link>
						</p>
						<p>
							<Link className="text-decoration-none">Shipping info</Link>
						</p>
					</div>
					<div className="col-lg-2 text-app-footer">
						<p className="fw-bold text-white">User Center</p>
						<p >Register</p>
						<p >Sign in</p>
						<p >Restore account</p>
						<p >Track order</p>
					</div>
					<div className="col-lg-2 text-app-footer">
						<p className="fw-bold text-white">Social</p>
						<p >Facebook</p>
						<p >Twitter</p>
						<p >Instagram</p>
						<p >Youtube</p>
					</div>
				</div>
				<hr  className="b-white"/>
				<footer className="pb-4 pt-1 text-white">
					&copy; lapakampus. All rights reserved
				</footer>
			</div>
		</div>
	)
}
export default Footer;
