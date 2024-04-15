import "./product-card-review.css"
import ButtonFunction from "../button-function/ButtonFunction.jsx";
import StarIcon from "../star-icon/StarIcon.jsx";
import {useEffect, useState} from "react";
import {checkGrade} from "../../helpers/checkGrade.js";

const ProductCardReview = ({source, alt, disable, nameProduct, clicked}) => { //hier kan nog een key/id ontvangen en gebruikt worden
    const [textBtn, toggleTextBtn] = useState("")
    const [fillingStar, setFillingStar] = useState("fill");
    const [grade, setGrade] = useState("");

    useEffect(() => {
        if (disable === true && checkGrade(grade)) {
            toggleTextBtn("edit")
        } else {
            toggleTextBtn("save")
        }
    }, [disable, grade]);

    function deleteFavorite () {
        setFillingStar("regular");
        //delete request dat card van account verwijderd wordt.
    }

    return (
        <article className="product-review__card">
            <span className="product-review__img-wrapper">
                <img src={source} alt={alt}/>
            </span>
            <form className="product-review__form">
                <label htmlFor="input-grade">
                    Grade:
                    <input type="text" id="input-grade" name="grade" className="product-review__input" onChange={(e) => {setGrade(e.target.value)}}
                           disabled={disable}/>
                </label>
                {!checkGrade(grade) && <p>Vul aub een getal in tussen de 0 en 10</p>}
                <label htmlFor="feedback-are" className="product-review__label">
                    Feedback for {nameProduct}:
                    <textarea name="feedback" id="feedback-area" cols="50" rows="10" disabled={disable}
                              placeholder="Write your feedback here" className="product-review__textarea"/>
                </label>
            </form>
            <div className="product-review__div">
                <StarIcon size={50} weight={fillingStar} style="product-review__star" favorite={deleteFavorite}/>
                <ButtonFunction type="submit" text={textBtn} onClick={clicked}/>
            </div>
        </article>
    );
};

export default ProductCardReview;