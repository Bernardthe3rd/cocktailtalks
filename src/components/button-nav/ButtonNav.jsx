import {NavLink} from "react-router-dom";
import "./button-nav.css"

const ButtonNav = ({path, text}) => {
    return (
        <li>
            <NavLink to={path} className={({isActive}) => isActive ? "button-nav-active" : "button-nav-default"}>
                {text}
            </NavLink>
        </li>
    );
};

export default ButtonNav;