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
							<Link className="nav-link text-muted" >Sports and outdoor</Link>
							<Link className="nav-link text-muted" >Sports and outdoor</Link>
						</nav>
					</div>
				</div>
				<div className="col-lg-9 bg rounded" >
					<div className="row">

						<div className="col-lg-3">
							<div class="card card-product-grid">
								<Link className="img-wrap">
									<><img className="w-100" src={"https://ae01.alicdn.com/kf/Sa1f2e5b5134e4d15ac74a26af5f272a50/Jam-Tangan-Kuarsa-Bisnis-Pria-Jam-Tangan-Pria-Kalender-Enam-Mata-Tiga-Mata-Palsu-Modis-Jam.jpg_Q90.jpg_.webp"} /></>
								</Link>
								<figcaption className="info-wrap border-top px-2">
									<div class="price fw-bold">Rp29.98</div>
									<div>
										<p className="m-0 text-muted">200 terjual &#9733; 4.5</p>
									</div>
									<Link className="title m-0 text-decoration-none">Mens T-shirt Cotton Base</Link>
									<br />
									<small class="text-muted">Blue, White, Black</small>
								</figcaption>
							</div >
						</div>
						<div className="col-lg-3">
							<div class="card card-product-grid">
								<Link className="img-wrap">
									<><img className="w-100" src={"https://ae01.alicdn.com/kf/Sa1f2e5b5134e4d15ac74a26af5f272a50/Jam-Tangan-Kuarsa-Bisnis-Pria-Jam-Tangan-Pria-Kalender-Enam-Mata-Tiga-Mata-Palsu-Modis-Jam.jpg_Q90.jpg_.webp"} /></>
								</Link>
								<figcaption className="info-wrap border-top px-2">
									<div class="price fw-bold">Rp29.98</div>
									<div>
										<p className="m-0 text-muted">200 terjual &#9733; 4.5</p>
									</div>
									<Link className="title m-0 text-decoration-none">Mens T-shirt Cotton Base</Link>
									<br />
									<small class="text-muted">Blue, White, Black</small>
								</figcaption>
							</div >
						</div>
						<div className="col-lg-3">
							<div class="card card-product-grid">
								<Link className="img-wrap">
									<><img className="w-100" src={"https://ae01.alicdn.com/kf/Sa1f2e5b5134e4d15ac74a26af5f272a50/Jam-Tangan-Kuarsa-Bisnis-Pria-Jam-Tangan-Pria-Kalender-Enam-Mata-Tiga-Mata-Palsu-Modis-Jam.jpg_Q90.jpg_.webp"} /></>
								</Link>
								<figcaption className="info-wrap border-top px-2">
									<div class="price fw-bold">Rp29.98</div>
									<div>
										<p className="m-0 text-muted">200 terjual &#9733; 4.5</p>
									</div>
									<Link className="title m-0 text-decoration-none">Mens T-shirt Cotton Base</Link>
									<br />
									<small class="text-muted">Blue, White, Black</small>
								</figcaption>
							</div >
						</div>
						<div className="col-lg-3">
							<div class="card card-product-grid">
								<Link className="img-wrap">
									<><img className="w-100" src={"https://ae01.alicdn.com/kf/Sa1f2e5b5134e4d15ac74a26af5f272a50/Jam-Tangan-Kuarsa-Bisnis-Pria-Jam-Tangan-Pria-Kalender-Enam-Mata-Tiga-Mata-Palsu-Modis-Jam.jpg_Q90.jpg_.webp"} /></>
								</Link>
								<figcaption className="info-wrap border-top px-2">
									<div class="price fw-bold">Rp29.98</div>
									<div>
										<p className="m-0 text-muted">200 terjual &#9733; 4.5</p>
									</div>
									<Link className="title m-0 text-decoration-none">Mens T-shirt Cotton Base</Link>
									<br />
									<small class="text-muted">Blue, White, Black</small>
								</figcaption>
							</div >
						</div>

					</div>
				</div>

			</div>
		</div>
	);
}

export default ListProduct;
