import homeimg from "/src/assets/imgHomepage.jpg";
import "./home.css"

import ButtonLink from "../../components/button-link/ButtonLink.jsx";
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import InputField from "../../components/input-field/InputField.jsx";

import {validateEmail} from "../../helpers/validateEmail.js";

import { useState} from "react";


const Home = ({registrationSucces}) => {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [errorEmail, toggleErrorEmail] = useState(false);

    function handleSubmit (e) {
        e.preventDefault();
        if (validateEmail(newsletterEmail)) {
            console.log(newsletterEmail);
            toggleErrorEmail(false);
            setNewsletterEmail("");
        } else {
            console.log(newsletterEmail);
            toggleErrorEmail(true);
            setNewsletterEmail("");
        }
    }


    return (
        <>
            <main className="container">
                <article className="home__article-upper">
                    {registrationSucces && <p>Your registration has been succesfull. You can now go back to login.</p>}
                    <div className="home__div-content">
                        <h1>PHENOMENAL COCKTAIL. PHENOMENAL COMMUNITY.</h1>
                        <h3>From anywhere in the world, <br/> For all cocktail fans here at CocktailTalks</h3>
                        <ButtonLink path="/about"
                                    text="about"
                        />
                    </div>
                    <span className="home__img-wrapper">
                        <img src={homeimg} alt="cocktail glasses"/>
                    </span>
                </article>
                <article className="home__article-bottom">
                    <h2>Want to be notified about the latest updates?</h2>
                    <InputField name="email newsletter"
                                type="text"
                                placeholder="Email"
                                value={newsletterEmail}
                                handleChange={(e) => setNewsletterEmail(e.target.value)}
                    />
                    {errorEmail && <p>Unfortunately the subscribing went wrong. Please fill in a valid email-address and try again.</p>}
                    <ButtonFunction type="button"
                                    text="subscribe"
                                    onClick={handleSubmit}
                    />
                </article>
            </main>
        </>
    );
}
export default Home;