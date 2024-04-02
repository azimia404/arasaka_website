import './Style/Navbar.css';
import {Logo, LogoName} from "./Logo";
import {MenuIcon} from "./Menu";
import "./Style/grid.css";
import {Link, NavLink} from "react-router-dom";

function NavbarRightCounter(props){

    let items = props.topItems.map((item,id) => {

            return <li key={item.name}><NavLink to={item.link} className={({IsActive, IsPending}) =>{
                return IsActive ? "Navbar-right-counter-item current" : "Navbar-right-counter-item";
            }}>{id + 1}</NavLink></li>
        }
    );

    return (
        <ol className="Navbar-right-counter">
            {items}
        </ol>);
}

function NavbarRight(props) {
    return (
        <nav className="Navbar-right ">
            <div className="Navbar-banner-wrapper">
                <div className="Navbar-right-banner"><i className="fa-solid fa-city"></i>Corpo Shop</div>
            </div>
            <NavbarRightCounter topItems={props.topItems}></NavbarRightCounter>
        </nav>
    );
}

export default NavbarRight;
