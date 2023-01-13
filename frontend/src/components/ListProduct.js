import { Link } from "react-router-dom";
function ListProduct() {
	return (
		<div className="container py-2" >
			<div className="row">

				<div className="col-lg-3 px-2">
					<div className="card p-2 rounded border border-0" >
						<nav className="nav flex-column nav-pills">
							<Link className="nav-link bg-light" >Electronics</Link>
							<Link className="nav-link text-muted" >Clothes and wear</Link>
							<Link className="nav-link text-muted" >Home interiors</Link>
							<Link className="nav-link text-muted" >Computer and tech</Link>
							<Link className="nav-link text-muted" >Tools, equipments</Link>
							<Link className="nav-link text-muted" >Sports and outdoor</Link>
						</nav>
					</div>
				</div>

				<div className="col-lg-9 bg rounded" style={{ backgroundColor: "var(--bs-warning)" }}>
					<div className="row">
						<div className="col-lg-4">fdsaf</div>
						<div className="col-lg-4">fdsaf</div>
						<div className="col-lg-4">fdsaf</div>
					</div>
				</div>

			</div>
		</div>
	);
}

export default ListProduct;
