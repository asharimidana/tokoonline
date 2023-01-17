// import { Link } from "react-router-dom";
function Banner() {
	return (
		<div className="container py-2 pt-4" >
			<div className="row">
				<div className="col-lg-9 p-1">
					<article className="card-banner p-5 rounded bg-app" style={{ "height": "350px" }}>
						<div style={{ maxWidth: "500px" }}>
							<h2 className="text-white">Great products with  best deals </h2>
							<p className="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
						</div>
					</article>
				</div>
				<div className="col-lg-3 p-1" >
					<div className="card-body text-center rounded p-0" style={{ backgroundColor: "var(--bs-warning)", "height": "350px" }}>
						<h5 className=" text-white">Amazing Gifts</h5>
						<p className="text-white">No matter how far along you are in your sophistication</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
