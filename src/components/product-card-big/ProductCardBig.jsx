import "./product-card-big.css"
import StarIcon from "../star-icon/StarIcon.jsx";

const ProductCardBig = ({source, alt, description}) => {

    return (
        <article className="card-product">
            <span className="wrapper-product-img">
                <img src={source} alt={alt}/>
            </span>
            <fieldset id="information=product" className="fieldset-style">
                <legend>How to prepare</legend>
                <textarea name="product info" id="information-product" cols="50" rows="13" className="text-box-product" disabled={true} value={description}>
                {description}
                </textarea>
            </fieldset>
            <StarIcon size={125} weight="regular" style="star-product"/>
        </article>
    );
};

export default ProductCardBig;