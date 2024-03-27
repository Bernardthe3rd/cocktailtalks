import "./product-card-big.css"
import {Star} from "@phosphor-icons/react";

const ProductCardBig = ({source, alt, description}) => {

    return (
        <article className="card-product">
            <span className="wrapper-product-img">
                <img src={source} alt={alt}/>
            </span>
            <fieldset id="information=product" className="fieldset-style">
                <legend>How to prepare</legend>
                <textarea name="product info" id="information-product" cols="50" rows="13" className="text-box-product" disabled={true}>
                {description}
                </textarea>
            </fieldset>
            <Star size={125} color="#FFB985" alt="Star icon" weight="regular" className="star-product"/>
        </article>
    );
};

export default ProductCardBig;