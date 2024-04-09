import "./product-card-small.css"
import ButtonLink from "../button-link/ButtonLink.jsx";
import StarIcon from "../star-icon/StarIcon.jsx";

const ProductCardSmall = ({source, alt, id, name}) => {
    return (
        <li key={id} className="card-products">
            <p>{name}</p>
            <StarIcon size={50} weight="regular" style="star-catalog"/>
            <span className="wrapper-catalog-product-img">
                <img src={source} alt={alt}/>
            </span>
            <ButtonLink path={`/product/${id}`} text="get to know me"/>
        </li>
    );
};

export default ProductCardSmall;