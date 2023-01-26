import { NavLink, Link } from "react-router-dom";

function ListProduct() {
	return (
		<div className="bg-light">
			<div className="container bg-light">
				<div className="row py-2">
					<div className="col-lg-3 px-2">
						<div className="card p-2 rounded border border-0">
							<nav className="nav flex-column nav-pills hov-link">
								<NavLink to="/" className="nav-link text-muted">
									Electronics
								</NavLink>
								<NavLink to="/2" className="nav-link text-muted">
									Busana Pria
								</NavLink>
								<NavLink to="/3" className="nav-link text-muted">
									Komputer, Kantor
								</NavLink>
								<NavLink to="/4" className="nav-link text-muted">
									Rumah
								</NavLink>
								<NavLink to="/5" className="nav-link text-muted">
									Tas & pakaian
								</NavLink>
								<NavLink to="/6" className="nav-link text-muted">
									Kecantikan & Kesehatan{" "}
								</NavLink>
								<NavLink to="/7" className="nav-link text-muted">
									Alat-alat Rumah{" "}
								</NavLink>
								<NavLink to="/8" className="nav-link text-muted">
									Buku & Perkuliahan
								</NavLink>
							</nav>
						</div>
					</div>
					<div className="col-lg-9 bg rounded">
						<div className="row">
							<div className="col-lg-3">
								<div className="card card-product-grid">
									<Link className="img-wrap">
										<>
											<img
												className="w-100"
												alt="product"
												src={
													"https://ae01.alicdn.com/kf/Sa1f2e5b5134e4d15ac74a26af5f272a50/Jam-Tangan-Kuarsa-Bisnis-Pria-Jam-Tangan-Pria-Kalender-Enam-Mata-Tiga-Mata-Palsu-Modis-Jam.jpg_Q90.jpg_.webp"
												}
											/>
										</>
									</Link>
									<div className="info-wrap border-top px-2">
										<div className="price fw-bold text-app">Rp29.98</div>
										<div>
											<small className="m-0 text-muted">
												200 terjual &#9733; 4.5
											</small>
										</div>
										<Link className="title m-0 text-decoration-none fw-bold text-muted">
											Mens T-shirt Cotton Base
										</Link>
										<br />
										<br />
										<small className="text-muted">jakarta</small>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="card card-product-grid">
									<Link className="img-wrap">
										<>
											<img
												className="w-100"
												alt="product"
												src={
													"https://ae01.alicdn.com/kf/Sa1f2e5b5134e4d15ac74a26af5f272a50/Jam-Tangan-Kuarsa-Bisnis-Pria-Jam-Tangan-Pria-Kalender-Enam-Mata-Tiga-Mata-Palsu-Modis-Jam.jpg_Q90.jpg_.webp"
												}
											/>
										</>
									</Link>
									<div className="info-wrap border-top px-2">
										<div className="price fw-bold">Rp29.98</div>
										<div>
											<p className="m-0 text-muted">
												200 terjual &#9733; 4.5
											</p>
										</div>
										<Link className="title m-0 text-decoration-none">
											Mens T-shirt Cotton Base
										</Link>
										<br />
										<small className="text-muted">Blue, White, Black</small>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="card card-product-grid">
									<Link className="img-wrap">
										<>
											<img
												className="w-100"
												alt="product"
												src={
													"https://ae01.alicdn.com/kf/Sa1f2e5b5134e4d15ac74a26af5f272a50/Jam-Tangan-Kuarsa-Bisnis-Pria-Jam-Tangan-Pria-Kalender-Enam-Mata-Tiga-Mata-Palsu-Modis-Jam.jpg_Q90.jpg_.webp"
												}
											/>
										</>
									</Link>
									<div className="info-wrap border-top px-2">
										<div className="price fw-bold">Rp29.98</div>
										<div>
											<p className="m-0 text-muted">
												200 terjual &#9733; 4.5
											</p>
										</div>
										<Link className="title m-0 text-decoration-none">
											Mens T-shirt Cotton Base
										</Link>
										<br />
										<small className="text-muted">Blue, White, Black</small>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="card card-product-grid">
									<Link className="img-wrap">
										<>
											<img
												className="w-100"
												alt="product"
												src={
													"https://ae01.alicdn.com/kf/Sa1f2e5b5134e4d15ac74a26af5f272a50/Jam-Tangan-Kuarsa-Bisnis-Pria-Jam-Tangan-Pria-Kalender-Enam-Mata-Tiga-Mata-Palsu-Modis-Jam.jpg_Q90.jpg_.webp"
												}
											/>
										</>
									</Link>
									<div className="info-wrap border-top px-2">
										<div className="price fw-bold">Rp29.98</div>
										<div>
											<p className="m-0 text-muted">
												200 terjual &#9733; 4.5
											</p>
										</div>
										<Link className="title m-0 text-decoration-none">
											Mens T-shirt Cotton Base
										</Link>
										<br />
										<small className="text-muted">Blue, White, Black</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListProduct;
