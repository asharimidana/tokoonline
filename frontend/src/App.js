import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/index";
import Login from "./Pages/Login";
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Login/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
