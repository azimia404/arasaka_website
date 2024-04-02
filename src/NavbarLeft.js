import './Style/Navbar.css';
import {Logo, LogoName} from "./Logo";
import {MenuIcon} from "./Menu";
import "./Style/grid.css";

function NavbarLeft() {
    return (
        <nav className="Navbar-left ">
            <div className="Navbar-banner-wrapper">
                <ul className="Navbar-left-socials">
                    <li className="current"><i className="fa-brands fa-youtube"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-telegram"></i></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarLeft;
