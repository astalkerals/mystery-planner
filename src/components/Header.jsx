import "../css/Header.css";
import Navigation from "./Navigation.jsx";

const Header = (page) => {
    return (
        <header id="main-header">
            <h1>{page.title}</h1>
            <Navigation />
        </header>
    );
};

export default Header;