function Profile() {
	return (
		<div>
			<div className="row">
				<p className="mb-0">Alamat Pengiriman</p>
				<small className="text-secondary mt-1">Lengkapi alamat anda untuk kemudahan transaksi</small>
				<div className="col-12 my-2">
					<hr className="my-1 " />
				</div>
				<div className="col-lg-6">
					<div className="card  shadow-sm p-2 pb-0 text-secondary d-flex justify-content-start">
						<p className="lh-lg">
							<i className="material-icons me-2">location_on</i>
							jalan Ahmad Dahlan No 3, Watubangga, Kec. Baruga, Kota Kendari, Sulawesi Tenggara - 92981
							<br /> Dekat Lapangan Watubangga | 085395499307
						</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="card  shadow-sm p-2 pb-0 text-secondary d-flex justify-content-start">
						<p className="lh-lg">
							<i className="material-icons me-2">location_on</i>
		jalan Ahmad Dahlan No 3, Watubangga, Kec. Baruga, Kota Kendari, Sulawesi Tenggara - 92981
		<br /> Dekat Lapangan Watubangga | 085395499307
						</p>
					</div>
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
export default Profile;
