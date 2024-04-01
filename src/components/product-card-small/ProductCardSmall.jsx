import "./product-card-small.css"
import {Star} from "@phosphor-icons/react";
import ButtonLink from "../button-link/ButtonLink.jsx";
import StarIcon from "../star-icon/StarIcon.jsx";

const ProductCardSmall = ({source, alt, id}) => {
    return (
        <li className="card-products">
            <StarIcon size={50} weight="regular" style="star-catalog"/>
            <span className="wrapper-catalog-product-img">
                <img src={source} alt={alt}/>
            </span>
            <ButtonLink path={`/product${id}`} text="get to know me"/>
        </li>
    );
};

export default ProductCardSmall;