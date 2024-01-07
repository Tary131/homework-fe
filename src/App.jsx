import { useState, Suspense } from "react";
import Header from "./components/Header/Header.jsx";
import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";
import AllLists from "./components/AllLists/AllLists.jsx";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme, darkTheme } from "./theme.js";
import i18n from "i18next";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};
	return (
		<div>
			<Suspense fallback="loading...">
				<ThemeProvider theme={darkMode ? darkTheme : theme}>
					<Header
						toggleDarkMode={toggleDarkMode}
						darkMode={darkMode}
						i18n={i18n}
						availableLanguages={["en", "ru"]}
					/>
					<Routes>
						<Route
							path="/shopping-list/:id"
							element={<ShoppingList darkMode={darkMode} />}
						/>
						<Route
							path="/all-lists"
							element={<AllLists darkMode={darkMode} />}
						/>
						<Route
							path="/shopping-list"
							element={<ShoppingList darkMode={darkMode} />}
						/>
					</Routes>
				</ThemeProvider>
			</Suspense>
		</div>
	);
};

export default App;
