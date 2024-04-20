import logo from "../../assets/Logo.png";
import "./navbar.css"
import ButtonNav from "../button-nav/ButtonNav.jsx";
import {Martini} from "@phosphor-icons/react";
import {NavLink} from "react-router-dom";
import {useState} from "react";


const Navbar = ({validateLogin}) => {
    const [smallNav, toggleSmallNav] = useState(false);

    function handleClickMenu () {
        toggleSmallNav(!smallNav)
    }

    return (
        <nav className="container">
            <Martini size={75} className="nav__icon" onClick={handleClickMenu}/>
            {smallNav &&
                <ul className="nav__small">
                    <ButtonNav path="/catalog" text="catalog"/>
                    <ButtonNav path="/about" text="about"/>
                    <ButtonNav path="/randomizer" text="randomizer"/>
                    <ButtonNav path={validateLogin ? "/account" : "/login"} text={validateLogin ? "account" : "login"} />
                </ul>
            }
            <ul className="nav__big">
                <ButtonNav path="/catalog" text="catalog"/>
                <ButtonNav path="/about" text="about"/>
                <NavLink to="/" className="nav__logo-wrapper">
                    <img src={logo} alt="logo cocktailtalks"/>
                </NavLink>
                <ButtonNav path="/randomizer" text="randomizer"/>
                <ButtonNav path={validateLogin ? "/account" : "/login"} text={validateLogin ? "account" : "login"} />
            </ul>
        </nav>
    );
};

export default Navbar;