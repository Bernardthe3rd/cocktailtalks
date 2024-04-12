import "./product-card-big.css"
import StarIcon from "../star-icon/StarIcon.jsx";
import {checkValue} from "../../helpers/checkValue.js";

const ProductCardBig = ({source, alt, description, glass, preparing, ingredients}) => {
    console.log(ingredients)
    return (
        <article className="card-product">
            <span className="wrapper-product-img">
                <img src={source} alt={alt}/>
            </span>
            <fieldset id="information=product" className="fieldset-style">
                <legend>How to prepare</legend>
                <div className="text-product-randomizer">
                    <h3>{description}</h3>
                    <p>Things you need:</p>
                    <ul>
                        <li>{glass}</li>
                        {ingredients.map((ingredient) => {
                            return checkValue(ingredient) !== "" && <li key={ingredient}>{checkValue(ingredient)}</li>
                        })}
                    </ul>
                    <p>How to prepare:</p>
                    <p>{preparing}</p>
                </div>
            </fieldset>
            <StarIcon size={150} weight="regular" style="star-product"/>
        </article>
    );
};

export default ProductCardBig;