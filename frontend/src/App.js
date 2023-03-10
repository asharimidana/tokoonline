import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/index";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

import CartList from "./Pages/CartList";
import Checkout from "./Pages/Checkout";
import Biling from "./Pages/Biling";

import Profile from "./Pages/Profile";
import Order from "./Pages/Order";

import "./App.css";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/utama/:param" element={<HomePage />} />

				<Route path="/cart" element={<CartList />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/biling" element={<Biling />} />

				<Route path="/user/:id" element={<Profile />} />
				<Route path="/order/:category" element={<Order />} />

				<Route path="/404" element={<NotFound />} />
				<Route path="/*" element={<Navigate to="/404" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
