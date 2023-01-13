import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState(false)

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			// const logg = await axios.post(`http://localhost:5000/login/`, {
			// 	email,
			// 	password
			// });
			// console.log(logg.data.token)
			navigate("/");
		} catch (error) {
			setError(true)
		}
	};

	return (
		<div className="row m-0">
			<div className="col-12 pt-5">
				<>
					<img src={process.env.PUBLIC_URL + "logo512.png"} alt="logo perusahaan" className="center-block d-block mx-auto" style={{ "width": "80px" }} />
				</>
			</div>
			<div className="co-12 col-md-4"></div>
			<div className="co-12 col-md-4 ">
				{error ?
					<div className="d-flex alert alert-danger my-2 text-muted">
						<div className=" me-auto" >
							Email dan Pasword Salah!!
						</div>
						<button  className="btn p-0" onClick={() => setError(!error)} >
							<i className="sm material-icons text-end ">close</i>
						</button>
					</div>
					: null}
			</div>
			<div className="co-12 col-md-4"></div>

			<div className="col-md-4 col-0"></div>
			<div className="col-md-4 col-12">
				<form onSubmit={loginUser}>
					<div className="mb-4 col-0">
						<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" />
					</div>
					<div className="mb-3 form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>

		</div>

	);
};

export default Login;
