import "./product-card-review.css"
import ButtonFunction from "../button-function/ButtonFunction.jsx";
import StarIcon from "../star-icon/StarIcon.jsx";
import {useState} from "react";

const ProductCardReview = ({source, alt, disable, nameProduct, clicked}) => {

    return (
        <article className="card-review">
            <span className="wrapper-review-img">
                <img src={source} alt={alt}/>
            </span>
            <form className="form-feedback">
                <label htmlFor="input-grade">
                    Grade:
                    <input type="text" id="input-grade" name="grade" className="input-grade-field"
                           disabled={disable}/>
                </label>
                <label htmlFor="feedback-are" className="label-style-account">
                    Feedback for {nameProduct}:
                    <textarea name="feedback" id="feedback-area" cols="50" rows="10" disabled={disable}
                              placeholder="Write your feedback here" className="text-box-review"/>
                </label>
            </form>
            <div className="account--div__btnstar">
                <StarIcon size={50} weight="fill" style="star-review"/>
                <ButtonFunction type="submit" text="edit" onClick={clicked}/>
            </div>
        </article>
    );
};

export default ProductCardReview;