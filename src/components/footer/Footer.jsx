import "./footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="container">
            <div className="footer-container">
                <p> Made by Berny</p>
                <Link to="/about" className="link-main">contact us</Link>
            </div>
        </footer>
    );
};

export default Footer;