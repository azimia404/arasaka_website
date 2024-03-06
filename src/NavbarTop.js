import './Style/Navbar.css';
import {Logo, LogoName} from "./Logo";
import {MenuIcon} from "./Menu";
import "./Style/grid.css";
import "./index.css";
import { Link } from "react-router-dom";

function NavbarTop() {
    return (
        <header className="Navbar-top dd-grid dd-relative">
            <Logo className="Navbar-top-logo"></Logo>
                <nav className="Navbar-top-nav dd-grow-1 dd-grid dd-items-stretch">
                    <Link className="Navbar-top-logo-name-wrapper" to=""><LogoName className="Navbar-top-logo-name dd-4"></LogoName></Link>
                    <ul className="Navbar-top-menu dd-grow-1">
                        <li className="Current">About Us</li>
                        <li>News</li>
                        <li>Catalog</li>
                        <li>Investors</li>
                        <li>Vacancies</li>
                    </ul>
                </nav>
            <MenuIcon className="Menu-icon"></MenuIcon>
        </header>
);}

export default NavbarTop;
