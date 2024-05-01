import aboutImg from "/src/assets/img_home.jpg";
import "./about.css"
import ButtonLink from "../../components/button-link/ButtonLink.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import {useContext, useEffect, useState} from "react";
import {validateEmail} from "../../helpers/validateEmail.js";
import {AuthContext} from "../../context/AuthContext.jsx";

const About = () => {
    const {isAuth} = useContext(AuthContext);
    const [disableBtn, toggleDisableBtn] = useState(false);
    const [contactEmail, setContactEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sendSucces, setSendSucces] = useState(false);

    useEffect(() => {
        if (validateEmail(contactEmail)) {
            toggleDisableBtn(false)
        } else {
            toggleDisableBtn(true);
        }
    }, [contactEmail]);

    //function to save the details from the contact form.
    function handleSubmit (e) {
        e.preventDefault()
        console.log(
            `email: ${contactEmail}\n
            subject: ${subject}\n
            message: ${message}\n`
        )
        setContactEmail("");
        setSubject("");
        setMessage("");
        setSendSucces(true);
        window.scrollTo(0, 0);
    }

    return (
        <main className="container">
            {sendSucces && <p className="succes">The contact form has been send succesfully.</p>}
            <div className="about__div-container">
                <div className="about__div-content-box">
                    <h3>Our story - How CocktailTalk started</h3>
                    <article className="about__article">
                        <h4>Welcome to CocktaisTalks</h4>
                        <p>Here's a little story about a young guy who loves Cocktails but always had the same questions everytime he wanted one.</p>
                        <h4>Do you also have the same questions as:</h4>
                        <ul>
                            <li>I would like to try a new cocktail, but which one?</li>
                            <li>How do I make a certain cocktail and what kind of ingredients do I need?</li>
                            <li>Which cocktails did I even had in the past?</li>
                            <li>And did I even liked them?</li>
                        </ul>
                        <p>Sounds familiair? Then stop hesitating and join our community! </p>
                        <p>Because here at CocktailTalks we welcome every cocktail enthousiast and love to share our passion, ideas and feedback.</p>
                        <p>Are you ready, really ready to explore so many cocktails you every dreamed of?</p>
                        <p>Got excited yet? Click on the button below and come join our CocktailTastic Community!</p>
                        <ButtonLink path={isAuth ? "/account" : "/login"} text="join us"/>
                    </article>
                </div>
                <span className="about__img-wrapper">
                    <img src={aboutImg} alt="cocktail glasses"/>
                    <img src={aboutImg} alt="cocktail glasses"/>
                </span>
            </div>
            <div className="container__div">
                <h3>Get in touch!</h3>
                <form className="about__form" onSubmit={handleSubmit}>
                    <InputField type="text"
                                label="Email:"
                                name="email"
                                id="field-email-contact"
                                placeholder="email"
                                valueField={contactEmail}
                                handleChange={(e) => setContactEmail(e.target.value)}
                    />
                    <InputField type="text"
                                label="Subject:"
                                name="subject"
                                id="field-subject"
                                placeholder="subject"
                                valueField={subject}
                                handleChange={(e) => setSubject(e.target.value)}
                    />
                    <label htmlFor="about-textarea" className="product-review__label">
                        Where do you want to talk about?
                        <textarea name="about-text"
                                  id="about-textarea"
                                  cols="50" rows="10"
                                  placeholder="Write your text here"
                                  className="about__textarea"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <ButtonFunction type="submit"
                                    text="send"
                                    style="button-function"
                                    disableBtn={disableBtn}
                    />
                </form>
            </div>
        </main>
    );
};

export default About;