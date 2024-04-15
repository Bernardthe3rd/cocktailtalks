import "./product-card-big.css"
import StarIcon from "../star-icon/StarIcon.jsx";
import {checkValue} from "../../helpers/checkValue.js";

const ProductCardBig = ({source, alt, description, glass, preparing, ingredients}) => {

    return (
        <article className="product-big__card">
            <span className="product-big__img-wrapper">
                <img src={source} alt={alt}/>
                <StarIcon size={75} weight="regular" style="product-big__star"/>
            </span>
            <fieldset id="information=product" className="product-big__fieldset">
                <legend>Instructions</legend>
                <div className="product-big__textbox">
                    <h3>{description}</h3>
                    <h4>Things you need:</h4>
                    <ul>
                        <li>{glass}</li>
                        {ingredients.map((ingredient) => {
                            return checkValue(ingredient) !== "" && <li key={ingredient}>{checkValue(ingredient)}</li>
                        })}
                    </ul>
                    <h4>How to prepare:</h4>
                    <p>{preparing}</p>
                </div>
            </fieldset>
        </article>
    );
};

export default ProductCardBig;