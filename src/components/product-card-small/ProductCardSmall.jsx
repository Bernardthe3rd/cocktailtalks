import "./product-card-small.css"
import ButtonLink from "../button-link/ButtonLink.jsx";
import StarIcon from "../star-icon/StarIcon.jsx";

const ProductCardSmall = ({source, alt, id, name}) => {

    return (
        <li key={id} className="product-small__card">
            <p>{name}</p>
            <span className="product-small__img-wrapper">
                <img src={source} alt={alt}/>
                <StarIcon size={50}
                          style="product-small__star"
                          idCocktail={id}
                />
            </span>
            <ButtonLink path={`/product/${id}`}
                        text="get to know me"
            />
        </li>
    );
};

export default ProductCardSmall;