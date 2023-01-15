import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { CartDb } from "./Cart.js"

function ShoppingList() {

	const [counters, setCounters] = useState(
		CartDb
	);
	useEffect(() => {
		console.log(counters)
	})
	function handleKeyUp(jumlah, index) {
		const nextCounters = counters.map((c, i) => {
			if (jumlah === "" || jumlah == 0) {
				var jum = "" 
			console.log("ini 1: " + jum)
			} else if(isNaN(jumlah)) {
					jum = 1;
			console.log("ini 2:" + jum)
			} else{
				jum = jumlah;
			console.log("ini 3:" + jum)
			}
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
		const nextCounters = counters.map((c, i) => {
			if (jumlah == "") {
				var jum = 1
			} else if(isNaN(jumlah)) {
				jum = 1;
			} 
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
	function changeJumlah(jumlah, index) {
		if (jumlah !== "") {
			var jum = parseInt(jumlah, 10)
			console.log("if changeJumlah")
		} else if(isNaN(jumlah)) {
			jum = 1
			console.log("kosong")
		}else{
			jum ="" 
		}// jika tidak kosong maka ubah ke angka; jika huruf reset; jika kosong reset;
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
	return (
		<div className="bg-light">
			<div className="container py-4 ">

				{counters.map((data, index) => (
					<div key={index} className="row mb-3">
						<div className="col-lg-9 card border-0 shadow-sm">
							<div className="row p-0 bg-app-cart text-dark fw-bold d-flex justify-content-between align-items-center">
								<div className="d-flex flex-row align-items-center">
									<Form.Check
										type="checkbox"
										label=""
									/>
									<p className="mt-3">{data.name_toko}</p>
								</div>
							</div>
							<div className="row  pe-4 p-2">
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
													handleIncrementClick(index);
												}}>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"></path> </svg>
											</button>
											<input type="text" className="form-control"
												value={data.jumlah}
												onChange={(e) => changeJumlah(e.target.value, index)}
												onBlur={(e) => handleKeyOut(e.target.value, index)}
												onKeyUp={(e) => handleKeyUp(e.target.value, index)}
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
										<p className='m-0 text-dark'>{data.jumlah ? data.harga * data.jumlah : data.harga}</p>
										<small className="text-muted">{data.harga}/items</small>
									</div>
									<Link>Hapus</Link>
								</div>
								<hr className='my-2' />
							</div>
						</div>
						<div className="col-lg-3">
							<div className="card">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi nulla corrupti ea, quisquam dolor vel adipisci magnam saepe hic ipsa cumque atque reiciendis soluta provident consequuntur, quis accusantium sapiente.
							</div>
						</div>
					</div>

				))}

			</div>
		</div>
	);
}
export default ShoppingList;
