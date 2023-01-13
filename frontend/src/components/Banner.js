// import { Link } from "react-router-dom";
function Banner() {
	return (
		<div className="container py-2" >
			<div className="row">
				<div className="col-lg-9 px-2">
					<article className="card-banner p-5 rounded bg-primary" style={{"height": "350px"}}>
						<div style={{maxWidth: "500px"}}>
							<h2 className="text-white">Great products with  best deals </h2>
							<p className="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
						</div>
					</article> </div>
				<div className="col-lg-3 bg rounded" style={{ backgroundColor: "var(--bs-warning)" }}>
					<div className="card-body text-center">
						<h5 className="mt-3 text-white">Amazing Gifts</h5>
						<p className="text-white">No matter how far along you are in your sophistication</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
