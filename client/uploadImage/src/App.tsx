import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowImage from "./pages/showImage";

function App() {
	return(
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:id" element={<ShowImage />} />
		</Routes>
	)
}

export default App;
