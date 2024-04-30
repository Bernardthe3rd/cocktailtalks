import "./footer.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import ButtonFunction from "../button-function/ButtonFunction.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";

const Footer = () => {
    const { isAuth, logout } = useContext(AuthContext);

    return (
        <footer className="container">
            <div className="footer__div">
                <p> Made by Berny</p>
                <Link to="/about" className="footer__link">contact us</Link>
                {isAuth && <ButtonFunction type="submit" text="logout" style="button-function" onClick={logout} />}
            </div>
        </footer>
    );
};

export default Footer;