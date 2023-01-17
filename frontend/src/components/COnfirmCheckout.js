import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { CartDb } from "./Cart.js"

function ConfirmCheckout() {

	const [counters, setCounters] = useState(
		CartDb
	);
	useEffect(() => {
		console.log(counters)
	})

	function ubahData(jumlah, index) {
		if (jumlah === 0) {
			var jum = ""
		} else {
			jum = parseInt(jumlah, 10);
		}
		const nextCounters = counters.map((c, i) => {
			if (i === index) {
				return (
					{
						"description": c.description,
						"harga": c.harga,
						"id": c.id,
						"img": c.img,
						"jumlah": jum,
						"name": c.name,
						"name_toko": c.name_toko,
						"toko_id": c.toko_id

					});
			} else {
				return c;
			}
		});
		setCounters(nextCounters);
	}
	function handleKeyOut(jumlah, index) {
		if (jumlah === "" || jumlah <= 0) {
			var jum = 1;
		} else {
			jum = jumlah;
		}
		ubahData(jum, index)
	}

	function changeJumlah(jumlah, index) {
		if (!jumlah) {
			ubahData(0, index)
		} else {
			ubahData(jumlah, index)
		}
	}

	function handleDecrementClick(index) {
		const nextCounters = counters.map((c, i) => {
			if (c.jumlah <= 2) {
				var jum = 2
			} else {
				jum = c.jumlah
			}
			if (i === index) {
				return (
					{
						"description": c.description,
						"harga": c.harga,
						"id": c.id,
						"img": c.img,
						"jumlah": jum - 1,
						"name": c.name,
						"name_toko": c.name_toko,
						"toko_id": c.toko_id

					});
			} else {
				return c;
			}
		});
		setCounters(nextCounters);
	}
	function handleIncrementClick(index) {
		const nextCounters = counters.map((c, i) => {
			if (i === index) {
				return (
					{
						"description": c.description,
						"harga": c.harga,
						"id": c.id,
						"img": c.img,
						"jumlah": c.jumlah + 1,
						"name": c.name,
						"name_toko": c.name_toko,
						"toko_id": c.toko_id

					});
			} else {
				return c;
			}
		});
		setCounters(nextCounters);
	}
	const currency = function(number) {
		return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 2 }).format(number);
	};
	return (
		<div className="bg-light">
			<div className="container py-4 ">
				<div className="row">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link to={"/"}>
								<i className="bi bi-arrow-left-square-fill text-primary py-0 me-2 "></i>Home
							</Link></li>
							<li className="breadcrumb-item">Cart</li>
						</ol>
					</nav>
				</div>
				<div className="row mb-3 border">
					<div className="col-lg-9">
						{counters.map((data, index) => (
							<div key={index} className="row card border-0 ">
								<div className="col-12 p-0 px-2 bg-light text-dark fw-bold d-flex justify-content-between align-items-center">
									<div className="d-flex flex-row align-items-center">
										<Form.Check
											type="checkbox"
											label=""
										/>
										<p className="mt-3">{data.name_toko}</p>
									</div>
								</div>
								<div className="col-12  pe-4 p-2">
									<div className="d-flex justify-content-between align-items-center">
										<Form.Check
											type="checkbox"
											label=""
										/>
										<img className="p-2 border" src={data.img} alt="" style={{ maxHeight: "80px", maxWidth: "80px" }} />
										<div className="title">
											<h5>{data.name}</h5>
											<small className="text-muted">Color black, Merek Canon</small>
										</div>
										<div className="price" style={{ "width": "10rem" }}>
											<div className="input-group input-spinner">
												<button className="btn btn-light border" type="button"
													onClick={() => {
														handleDecrementClick(index);
													}}>
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"></path> </svg>
												</button>
												<input type="number" className="form-control"
													value={data.jumlah}
													onChange={(e) => {
														changeJumlah(e.target.value, index)
													}}
													onBlur={(e) => handleKeyOut(e.target.value, index)}
												/>
												<button className="btn btn-light border" type="button"
													onClick={() => {
														handleIncrementClick(index);
													}}>
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24">
														<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z">
														</path>
													</svg>
												</button>
											</div>
										</div>
										<div className="prince">
											<p className='m-0 text-dark'>{(data.jumlah >= 1) ?
												currency(data.harga * data.jumlah) :
												currency(data.harga)}</p>
											<small className="text-muted">{currency(data.harga)}/items</small>
										</div>
										<Link>Hapus</Link>
									</div>
									<hr className='my-2' />
								</div>
							</div>
						))}

					</div>
					<div className="col-lg-3">
						<div className="card border-0 shadow-sm mb-4">
							<div className="card-body">
								<div className="d-flex py-1 text-secondary">
									<div style={{ "width": "120px" }}>
										<input type="text" placeholder='Masukkan Kode'  className='mb-2' name=""  />
									</div>
								</div>
								<Link to={"/checkout"} className='btn btn-sm btn-primary' type="button">
									Buat Pesanan
								</Link>
							</div>
						</div>
						<div className="card border-0 shadow-sm">
							<div className="card-body">
								<div className="d-flex py-1 text-secondary">
									<div style={{ "width": "120px" }}>
									</div>
									<div className='text-end'>
										Rp. 300.000
									</div>
								</div>
								<div className="d-flex py-1 text-secondary">
									<div style={{ "width": "120px" }}>
										Ongkir:
									</div>
									<div className='text-end text-danger'>
										+ Rp. 10.000
									</div>
								</div>
								<div className="d-flex py-1 text-muted">
									<div style={{ "width": "120px" }}>
										Diskon:
									</div>
									<div className='text-end text-success'>
										-  Rp. 10.000
									</div>
								</div>
								<hr />
								<div className="d-flex py-1 text-dark mb-3 fw-bold">
									<div style={{ "width": "120px" }}>
										Total:
									</div>
									<div className='text-end text-dark'>
										Rp. 110.000
									</div>
								</div>
								<Link to={"/checkout"} className='btn btn-sm btn-primary' type="button">
									Buat Pesanan
								</Link>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
export default ConfirmCheckout;
