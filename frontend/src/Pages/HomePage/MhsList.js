import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ConfirmModal from "../../components/ConfirmModal";
const MhsList = ({ data }) => {
	const [datax, setMhs] = useState([]);

	useEffect(() => {
		setMhs(data)
	}, [data]);

	const getMhss = async () => {
		const response = await axios.get("http://localhost:5000/");
		setMhs(response.data)

	};
	const [value, setValue] = useState("");
	const handleSubmit = () => {
		getMhss()
	};

	return (

		<table className="table is-striped is-fullwidth">
			<thead>
				<tr>
					<th>No</th>
					<th>Nama</th>
					<th>NIM</th>
					<th>Prodi</th>
					<th>Semester</th>
					<th>Kelas</th>
					<th>Angkatan</th>
					<th>Aksi</th>
				</tr>
			</thead>
			<tbody>
				{datax.map((dat, index) => (
					<tr key={dat.id}>
						<td>{index + 1}</td>
						<td>{dat.nama}</td>
						<td>{dat.nim}</td>
						<td>{dat.prodi}</td>
						<td>{dat.semester}</td>
						<td>{dat.kelas}</td>
						<td>{dat.angkatan}</td>
						<td>
							<Link
								to={`/detail/${dat.id}`}
								className="button is-small p-0 is-success mr-2"
							>
								<i class="material-icons">info</i>
							</Link>
							<Link
								to={`/mhs/${dat.id}`}
								className="button is-small is-info p-0 mr-2"
							>
								<i class="material-icons">edit</i>
							</Link>
							<ConfirmModal
								title="Confirm"
								description="Apakah Yakin?"
								id={dat.id}
								callbackFunction={handleSubmit}
							>
								{confirm => (
									<>
										{value}
										<button type="button  " className="button is-small is-danger p-0" onClick={confirm(handleSubmit)}>
											<i class="material-icons">delete</i>
										</button>
									</>
								)}
							</ConfirmModal>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MhsList;
