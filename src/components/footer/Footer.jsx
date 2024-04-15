import "./footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="container">
            <div className="footer__div">
                <p> Made by Berny</p>
                <Link to="/about" className="footer__link">contact us</Link>
            </div>
        </footer>
    );
};

export default Footer;