import './Style/Navbar.css';
import {Logo, LogoName} from "./Logo";
import {MenuIcon} from "./Menu";
import "./Style/grid.css";

function NavbarRight() {
    return (
        <nav className="Navbar-right ">
            <div className="Navbar-banner-wrapper">
                <div className="Navbar-right-banner"><i className="fa-solid fa-city"></i>Corpo Shop</div>
            </div>
            <ol className="Navbar-right-counter">
                <li></li>
                <li></li>
                <li className="Navbar-right-counter"></li>
                <li></li>
                <li></li>
            </ol>
        </nav>
    );
}

export default NavbarRight;
