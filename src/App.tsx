import { BrowserRouter, Route, Routes } from "react-router";

import { MainLayout } from "@/layouts";
import { Home } from "@/pages/Home";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<MainLayout />}>
						<Route
							index
							element={<Home />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
