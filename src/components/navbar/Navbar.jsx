import {NavLink} from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./navbar.css"
import ButtonNav from "../button-nav/ButtonNav.jsx";


const Navbar = ({validateLogin}) => {

    return (
        <nav className="container">
            <ul className="navbar-container">
                <ButtonNav path="/catalog" text="catalog"/>
                <ButtonNav path="/about" text="about"/>
                <NavLink to="/" className="img-wrapper-logo">
                    <img src={logo} alt="logo cocktailtalks"/>
                </NavLink>
                <ButtonNav path="/randomizer" text="randomizer"/>
                <ButtonNav path={validateLogin ? "/account" : "/login"} text="account"/>
            </ul>
        </nav>
    );
};

export default Navbar;