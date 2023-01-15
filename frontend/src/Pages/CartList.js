import  NavbarApp  from "../components/NavbarApp2";
import  Footer from "../components/Footer";
import  ShoppingList from "../components/ShoppingList";
function CartList() {
	return (
		<div>
		{<NavbarApp />}
		{<ShoppingList/>}
		{<Footer/>}
		</div>
	)
}
export default CartList;
