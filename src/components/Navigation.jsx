import {Link} from "react-router-dom";
import "../css/Navigation.css";
import {useState} from "react";

const Navigation = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    return (
        <nav id="main-nav">
            <a onClick={toggleMenu} id="toggle-nav"  href="#">{
                menuOpen?(<p>&#8963;</p>) : (<p>&#8964;</p>)}
            </a>
            <ul className={menuOpen?"columns":"hide-small"}>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/build">Custom Build</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;