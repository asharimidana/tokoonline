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
						<Form.Control type="email" defaultValue="Ashari Midana" />
					</div>
					<div>
						<Form.Label>Telp. / WA </Form.Label>
						<Form.Control type="text" defaultValue="085395499307" />
					</div>
					<div>
						<Form.Label>Jenis Kelamin</Form.Label>
						<Form.Check type="radio" id="default-radio" label="Laki-laki" checked />
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
			</div>
			<hr />
			<div></div>
		</div>
	);
}
export default Profile;
