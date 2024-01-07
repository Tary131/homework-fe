import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import "../../i18n.js";

const Header = ({ toggleDarkMode, darkMode }) => {
	const isAuth = true;
	const { t, i18n } = useTranslation();
	const changeLanguage = () => {
		const newLanguage = i18n.language === "en" ? "cz" : "en";
		i18n.changeLanguage(newLanguage);
	};

	const onClickLogout = () => {};

	return (
		<div className={`${styles.root} ${darkMode ? styles.darkMode : ""}`}>
			<Container maxWidth="lg">
				<div className={styles.inner}>
					<a className={styles.logo} href="/all-lists">
						<div>Shopping-Manager</div>
					</a>
					<div className={styles.buttons}>
						{isAuth ? (
							<>
								<Link to="/shopping-list">
									<Button variant="contained">{t("Create List")}</Button>
								</Link>
								<Button
									onClick={onClickLogout}
									variant="contained"
									color="error"
								>
									{t("Log out")}
								</Button>
							</>
						) : (
							<>
								<Link to="/login">
									<Button variant="outlined">{t("Log in")}</Button>
								</Link>
								<Link to="/register">
									<Button variant="contained">{t("Create account")}</Button>
								</Link>
							</>
						)}
						<Button onClick={toggleDarkMode}>
							{darkMode ? "Light Mode" : "Dark Mode"}
						</Button>
						<Button color="inherit" onClick={changeLanguage}>
							{i18n.language === "en" ? "EN" : "CZ"}
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};
export default Header;
