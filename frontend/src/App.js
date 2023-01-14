import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/index";
import Login from "./Pages/Login";
import CartList from "./Pages/CartList";
import NotFound from "./Pages/NotFound";
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login/>} />
				<Route path="/" element={<HomePage />} />
				<Route path="/utama/:param" element={<HomePage />} />

				<Route path="/cart" element={<CartList/>} />

				<Route path="/404" element={<NotFound/>} />
				<Route path="/*" element={<Navigate to="/404"/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
