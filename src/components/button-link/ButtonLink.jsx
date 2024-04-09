import "./button-link.css"
import {Link} from "react-router-dom";

const ButtonLink = ({path , text}) => {
    return (
        <Link to={path} className="button-link">
            {text}
        </Link>
    );
};

export default ButtonLink;