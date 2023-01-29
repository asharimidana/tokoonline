import Form from "react-bootstrap/Form";
function Profile() {
	return (
		<div>
			<Form></Form>
			<div className="row">
				<div className="col-lg-9">
					<div className="me-3">
						<Form.Label>username</Form.Label>
						<Form.Control type="email" defaultValue="asharimidana" />
					</div>
					<div className="me-3">
						<Form.Label>Nama</Form.Label>
						<Form.Control type="email" defaultValue="Ashari Midana" />
					</div>
					<div>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" defaultValue="asharimidana1@gmail.com" />
					</div>
					<div>
						<Form.Label>Telp. / WA </Form.Label>
						<Form.Control type="text" defaultValue="085395499307" />
					</div>
					<div>
						<Form.Label>Jenis Kelamin</Form.Label>
						<Form.Check type="radio" id="default-radio" label="Laki-laki" defaultChecked />
						<Form.Check type="radio" id="default-radi" label="Perempuan" />
					</div>
					<div className="mb-2" style={{ width: "170px" }}>
						<Form.Label>Tempat Tanggal Lahir</Form.Label>
						<Form.Control type="date" />
					</div>
					<button type="button" className="btn btn-primary btn-sm">
						Simpan
					</button>
				</div>
				<div className="col-lg-3">
					<div className=" ">
						<img
							className="icon-img-xl d-block text-center m-auto mb-2 rounded-circle "
							src="https://asharimidana.github.io/profil.jpg"
							alt="profil"
						/>
						<div className="d-flex justify-content-center mb-2">
							<button type="button" className="me-2 btn btn-outline-secondary btn-sm ">
								<i className="bi bi-camera-fill me-1"></i>
								Upload
							</button>
							<button type="button" className=" btn btn-outline-danger btn-sm ">
								<i className="bi bi-trash3-fill me-1"></i>
							</button>
						</div>
						<small className="text-center d-block text-secondary">Besar gambar max 1 MB</small>
						<small className="text-center d-block text-secondary">Format Jpeg, jpg, atau png</small>
					</div>
				</div>
			</div>
			<hr />
			<div></div>
		</div>
	);
}
export default Profile;
