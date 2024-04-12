import {NavLink} from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./navbar.css"
import ButtonNav from "../button-nav/ButtonNav.jsx";
import {Martini} from "@phosphor-icons/react";
import {useState} from "react";


const Navbar = ({validateLogin}) => {
    const [styleChange, toggleStyleChange] = useState(false);

    function handleClickMenu () {
        toggleStyleChange(!styleChange)
    }

    return (
        <nav className="container">
            <Martini size={75} className="menu-icon" onClick={handleClickMenu}/>
            {styleChange &&
                <ul className="navbar-small">
                    <ButtonNav path="/catalog" text="catalog"/>
                    <ButtonNav path="/about" text="about"/>
                    <ButtonNav path="/randomizer" text="randomizer"/>
                    <ButtonNav path={validateLogin ? "/account" : "/login"} text="account"/>
                </ul>
            }
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