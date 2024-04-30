import "./product-card-review.css"
import ButtonFunction from "../button-function/ButtonFunction.jsx";
import InputField from "../input-field/InputField.jsx";
import StarIcon from "../star-icon/StarIcon.jsx";
import {checkGrade} from "../../helpers/checkGrade.js";

import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

const ProductCardReview = ({source, alt, id, nameProduct}) => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("token");

    const [textBtn, toggleTextBtn] = useState("");
    const [grade, setGrade] = useState("0");
    const [feedback, setFeedback] = useState("");
    const [disable, toggleDisable] = useState(false);
    const [userFeedback, setUserFeedback] = useState(JSON.parse(user.info));


    useEffect(() => {
        if (disable === true && checkGrade(grade)) {
            toggleTextBtn("edit");
        } else {
            toggleTextBtn("save");
        }

        const getGrade = userFeedback.map((cocktailfeed) => {
            if (cocktailfeed.id === id) {
                return cocktailfeed.feedback.grade;
            } else {
                return null;
            }
        })

        const rightGrade = getGrade.find((grade) =>{
            return grade !== null;
        })

        if (rightGrade) {
            setGrade(rightGrade)
        } else {
            setGrade(grade)
        }

        const getFeedback = userFeedback.map((cocktailText) => {
            if (cocktailText.id === id) {
                return cocktailText.feedback.text;
            } else {
                return null;
            }
        })

        const rightText = getFeedback.find((text) =>{
            return text !== null;
        })
        setFeedback(rightText);

    }, [disable]);

    async function handleClick () {

        const dataToUpdate = {
            id: id,
            feedback: {
                grade: grade,
                text: feedback,
            }
        }

        let find = userFeedback.map((idCocktail) =>{
            if (idCocktail.id === id) {
                return dataToUpdate;
            } else {
                return idCocktail;
            }
        })
        setUserFeedback(find);

        try {
            // Wait for the state update to complete
            await new Promise(resolve => setTimeout(resolve, 0));
            // Use the latest state value directly in the API call
            const updateUserInfo = await axios.put(`https://api.datavortex.nl/cocktailtalks/users/${user.username}`, {
                name: user.username,
                email: user.email,
                password: user.password,
                info: JSON.stringify(find),
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(updateUserInfo);
        } catch (e) {
            console.error(e);
        }
        toggleDisable(!disable);
        window.location.reload();
    }

    return (
        <article className="product-review__card">
            <span className="product-review__img-wrapper">
                <img src={source} alt={alt}/>
            </span>
            <form className="product-review__form">
                <InputField label="Grade"
                            type="text"
                            id="input-grade"
                            name="grade"
                            style="product-review__input"
                            disabled={disable}
                            valueField={grade}
                            handleChange={(e) => setGrade(e.target.value)}
                />
                {!checkGrade(grade) && <p>Vul aub een getal in tussen de 0 en 10</p>}
                <label htmlFor="feedback-are" className="product-review__label">
                    Feedback for {nameProduct}:
                    <textarea name="feedback"
                              id="feedback-area"
                              cols="50" rows="10"
                              placeholder="Write your feedback here"
                              className="product-review__textarea"
                              disabled={disable}
                              value={feedback}
                              onChange={(e) => {setFeedback(e.target.value)}}
                    />
                </label>
            </form>
            <div className="product-review__div">
                <StarIcon size={50}
                          style="product-review__star"
                          idCocktail={id}
                />
                <ButtonFunction type="submit"
                                text={textBtn}
                                style="button-function"
                                onClick={handleClick}
                                disableBtn={!checkGrade(grade)}
                />
            </div>
        </article>
    );
};

export default ProductCardReview;