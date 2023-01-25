import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartDb } from "./Cart.js";

function ConfirmCheckout() {
	const [counters, setCounters] = useState(CartDb);
	useEffect(() => {
		console.log(counters);
	});

	function ubahData(jumlah, index) {
		if (jumlah === 0) {
			var jum = "";
		} else {
			jum = parseInt(jumlah, 10);
		}
		const nextCounters = counters.map((c, i) => {
			if (i === index) {
				return {
					description: c.description,
					harga: c.harga,
					id: c.id,
					img: c.img,
					jumlah: jum,
					name: c.name,
					name_toko: c.name_toko,
					toko_id: c.toko_id,
				};
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
		ubahData(jum, index);
	}

	function changeJumlah(jumlah, index) {
		if (!jumlah) {
			ubahData(0, index);
		} else {
			ubahData(jumlah, index);
		}
	}

	function handleDecrementClick(index) {
		const nextCounters = counters.map((c, i) => {
			if (c.jumlah <= 2) {
				var jum = 2;
			} else {
				jum = c.jumlah;
			}
			if (i === index) {
				return {
					description: c.description,
					harga: c.harga,
					id: c.id,
					img: c.img,
					jumlah: jum - 1,
					name: c.name,
					name_toko: c.name_toko,
					toko_id: c.toko_id,
				};
			} else {
				return c;
			}
		});
		setCounters(nextCounters);
	}

	function handleIncrementClick(index) {
		const nextCounters = counters.map((c, i) => {
			if (i === index) {
				return {
					description: c.description,
					harga: c.harga,
					id: c.id,
					img: c.img,
					jumlah: c.jumlah + 1,
					name: c.name,
					name_toko: c.name_toko,
					toko_id: c.toko_id,
				};
			} else {
				return c;
			}
		});
		setCounters(nextCounters);
	}

	const currency = function (number) {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 2,
		}).format(number);
	};

	return (
		<div className="bg-light py-4">
			<div className="container ">
				<div className="row p-2">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<Link to={"/"}>
									<i className="bi bi-arrow-left-square-fill text-primary py-0 me-2 "></i>
									Home
								</Link>
							</li>
							<li className="breadcrumb-item">Cart</li>
						</ol>
					</nav>
				</div>
				<div className="bg-white my-3 border pt-2 row">
					<div className="col-12  ">
						<div>
							<i
								className="bi bi-cart-check-fill text-primary me-2"
								style={{ "font-size": "1.3rem" }}
							></i>
							<h5 className="text-primary d-inline">Pesanan</h5>
						</div>
						<hr className="border-hr" />
						<table className="w-100">
							<tr>
								<th>Gambar</th>
								<th>Nama Barang</th>
								<th>Harga Satuan</th>
								<th>Jumlah</th>
								<th className="text-end">Subtotal</th>
							</tr>
							{counters.map((data, index) => (
								<tr key={index}>
									<td>
										<div style={{ width: "90px" }}>
											<img
												className="p-2 border"
												src={data.img}
												alt=""
												style={{ maxHeight: "50px", maxWidth: "50px" }}
											/>
										</div>
									</td>
									<td>
										<p>{data.name}</p>
									</td>
									<td>
										<p className="text-muted">{currency(data.harga)}</p>
									</td>
									<td>
										<p>{data.jumlah}</p>
									</td>
									<td className="text-end">
										<p className="m-0 text-dark">
											{data.jumlah >= 1
												? currency(data.harga * data.jumlah)
												: currency(data.harga)}
										</p>
									</td>
								</tr>
							))}
						</table>
					</div>

					{/*  metode pengiriman*/}
					<div className="col-12 bg-white mt-3 pt-3 px-3 border">
						<div className="row">
							<div className="d-flex justify-content-between">
								<div className="d-flex">
									<i className="bi bi-box-seam-fill me-2 text-primary"></i>
									<h5 className=" text-primary">Metode Pengiriman</h5>
								</div>
								<p className="text-secondary">
									Hemat - <small className="text-secondary">akan diterima 20-29 Januari 2022</small>
								</p>
								<p className="text-secondary fw-bold">Rp. 120.000</p>
							</div>
							<p className="btn btn-link text-start pt-0">Ubah</p>
						</div>
						<div className="row text-end bg-light">
							<hr className="border-hr" />
							<p className="text-secondary fw-bold">Total (3 roduk): Rp. 200.000</p>
						</div>
					</div>
				</div>

				{/*voucer*/}
				<div className="row py-3 bg-white p-1 border mb-3">
					<div className="  d-flex d-flex justify-content-between">
						<div>
							<i className="bi fs-5 text-primary bi-cash-coin me-2"></i>
							<h5 className="fs-5 text-primary d-inline">Voucher</h5>
						</div>
						<div>
							<button type="button" className="btn btn-link ps-0  text-decoration-none">
								Ubah
							</button>
						</div>
						<div className="fw-bold text-secondary">-20.000</div>
					</div>
					{/*<hr className="border-hr" />*/}
				</div>
				{/*end voucer*/}

				{/* alamat */}
				<div className="row bg-white mb-3 p-1 py-2 border">
					<div className="mb-3 text-primary">
						<i className="material-icons p-0 me-1 py-2 ">location_on</i>
						<h5 className=" d-inline pb-3">Alamat Pengiriman</h5>
					</div>
					<hr className="border-hr  " />
					<p className="fs-5 text-secondary m-0">Ashari Midana</p>
					<p>
						Percetakan stempel depan tvri, samping mujur motor, KOTA KENDARI - WUA-WUA, SULAWESI TENGGARA,
						ID 93117
					</p>
					<button
						type="button"
						className="btn btn-link ps-3 py-0 text-dangger text-start text-decoration-none"
					>
						Ubah
					</button>
				</div>
				{/*end  alamat */}

				<div className="row">
					<div className="border p-2 bg-white">
						<div className="">
							<div className="d-flex py-1 text-secondary">
								<div style={{ width: "120px" }}>Jumlah</div>
								<div className="text-end">Rp. 300.000</div>
							</div>
							<div className="d-flex py-1 text-secondary">
								<div style={{ width: "120px" }}>Ongkir:</div>
								<div className="text-end text-danger">+ Rp. 10.000</div>
							</div>
							<div className="d-flex py-1 text-muted">
								<div style={{ width: "120px" }}>Diskon:</div>
								<div className="text-end text-success">- Rp. 10.000</div>
							</div>
							<hr className="border-hr" />
							<div className="d-flex py-1 text-dark mb-3 fw-bold">
								<div style={{ width: "120px" }}>Total:</div>
								<div className="text-end text-dark">Rp. 110.000</div>
							</div>
							<Link to={"/biling"} className="btn btn-sm btn-primary" type="button">
								Bayar Sekarang
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ConfirmCheckout;
