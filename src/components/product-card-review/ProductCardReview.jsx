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
        <article className="card-review">
            <span className="wrapper-review-img">
                <img src={source} alt={alt}/>
            </span>
            <form className="form-feedback">
                <label htmlFor="input-grade">
                    Grade:
                    <input type="text" id="input-grade" name="grade" className="input-grade-field" onChange={(e) => {setGrade(e.target.value)}}
                           disabled={disable}/>
                </label>
                {!checkGrade(grade) && <p>Vul aub een getal in tussen de 0 en 10</p>}
                <label htmlFor="feedback-are" className="label-style-account">
                    Feedback for {nameProduct}:
                    <textarea name="feedback" id="feedback-area" cols="50" rows="10" disabled={disable}
                              placeholder="Write your feedback here" className="text-box-review"/>
                </label>
            </form>
            <div className="account--div__btnstar">
                <StarIcon size={50} weight={fillingStar} style="star-review" favorite={deleteFavorite}/>
                <ButtonFunction type="submit" text={textBtn} onClick={clicked}/>
            </div>
        </article>
    );
};

export default ProductCardReview;