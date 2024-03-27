import "./product-card-small.css"
import {Star} from "@phosphor-icons/react";
import ButtonLink from "../button-link/ButtonLink.jsx";

const ProductCardSmall = ({source, alt, id}) => {
    return (
        <li className="card-products">
            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star-catalog"/>
            <span className="wrapper-catalog-product-img">
                <img src={source} alt={alt}/>
            </span>
            <ButtonLink path={`/product${id}`} text="get to know me"/>
        </li>
    );
};

export default ProductCardSmall;