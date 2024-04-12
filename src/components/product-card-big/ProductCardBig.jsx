import "./product-card-big.css"
import StarIcon from "../star-icon/StarIcon.jsx";
import {checkValue} from "../../helpers/checkValue.js";

const ProductCardBig = ({source, alt, description, glass, preparing, ingredients}) => {

    return (
        <article className="card-product">
            <span className="wrapper-product-img">
                <img src={source} alt={alt}/>
                <StarIcon size={75} weight="regular" style="star-product"/>
            </span>
            <fieldset id="information=product" className="fieldset-style">
                <legend>Instructions</legend>
                <div className="product-textbox">
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