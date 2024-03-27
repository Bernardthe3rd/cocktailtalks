import {NavLink} from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./navbar.css"


const Navbar = ({validateLogin}) => {

    return (
        <>
            <nav className="container">
                <ul className="navbar-container">
                    <li><NavLink to="/catalog" className="button-link-nav">catalog</NavLink></li>
                    <li><NavLink to="/about" className="button-link-nav">about</NavLink></li>
                    <li>
                        <span className="img-wrapper-logo">
                            <NavLink to="/"><img src={logo} alt="logo cocktailtalks"/></NavLink>
                        </span>
                    </li>
                    <li><NavLink to="/randomizer" className="button-link-nav">randomizer</NavLink></li>
                    <li><NavLink to={validateLogin ? "/account" : "/login"} className="button-link-nav">account</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;