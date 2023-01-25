import { Link } from "react-router-dom";
function NotFound() {
	return (
		<div className="text-center">
			<h1 className="text-center">Tidak Ditemukan!!</h1>
			<Link to={"/"} className="btn btn-danger">Home</Link>
		</div>
	);
}

export default NotFound;
