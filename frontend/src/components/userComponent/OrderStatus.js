import { NavLink } from "react-router-dom";
function OrderStatus() {
	return (
		<div>
			<div className="row">
				<p className="mb-0">Pesanan Anda</p>
				<small className="text-secondary mt-1">Periksa Kembali Pesanan Anda</small>
				<div className="col-12 my-2">
					<hr className="my-1 " />
				</div>
				<div className="col-lg-12">
					<ul className="nav nav-tabs hov-link mb-2">
						<li className=" ">
							<NavLink className="nav-link " to={"/user/order/dibayar"}>
								Belum Dibayar
							</NavLink>
						</li>
						<li className="">
							<NavLink className="nav-link  " to="/order/dibayar">
								Dibayar
							</NavLink>
						</li>
						<li className="">
							<NavLink className="nav-link  " to="/order/belum">
								Link
							</NavLink>
						</li>
					</ul>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sunt itaque ab possimus minus, quae,
					quia facilis eos sint eum numquam nihil? Alias voluptatum numquam ea sapiente autem neque unde?
				</div>
				<div className="mt-2">
					<button className="btn btn-outline-primary btn-sm">
						<i className="bi bi-plus"></i>
						Tambah Alamat
					</button>
				</div>
			</div>
			<div></div>
		</div>
	);
}
export default OrderStatus;
