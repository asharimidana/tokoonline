import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import ConfirmModal from "../components/ConfirmModal";
const MhsList = ( ) => {
	const [datax, setMhs] = useState([]);

	useEffect(() => {
	}, []);

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
			</tbody>
		</table>
	);
};

export default MhsList;
