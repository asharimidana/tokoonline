import NavbarApp from "../components/NavbarApp2";
import Footer from "../components/Footer";
import ConfimCheckout from "../components/COnfirmCheckout";
function Checkout() {
	return (
		<div>
			{<NavbarApp />}
			{<ConfimCheckout />}
			{<Footer />}
		</div>
	);
}
export default Checkout;
