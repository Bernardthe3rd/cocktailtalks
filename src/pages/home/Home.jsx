import homeimg from "/src/assets/imgHomepage.jpg";
import "./home.css"

import ButtonLink from "../../components/button-link/ButtonLink.jsx";
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import InputField from "../../components/input-field/InputField.jsx";

import {validateEmail} from "../../helpers/validateEmail.js";

import {useState} from "react";


const Home = ({reg}) => {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [errorEmail, toggleErrorEmail] = useState(false);
    const [subscribeSucces, toggleSubscribeSucces] = useState(false);

    function handleSubmit (e) {
        e.preventDefault();
        if (validateEmail(newsletterEmail)) {
            console.log(newsletterEmail);
            toggleErrorEmail(false);
            toggleSubscribeSucces(true);
            setNewsletterEmail("");
        } else {
            console.log(newsletterEmail);
            toggleErrorEmail(true);
            toggleSubscribeSucces(false);
            setNewsletterEmail("");
        }
    }


    return (
        <>
            <main className="container">
                {reg && <p className="loading">Your registration has been successful. You can now go back to login.</p>}
                <article className="home__article-upper">
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
                                valueField={newsletterEmail}
                                handleChange={(e) => setNewsletterEmail(e.target.value)}
                    />
                    {subscribeSucces && <p>Thank you for subscribing. Some wonderful news is heading your way!</p>}
                    {errorEmail && <p>Unfortunately the subscribing went wrong. Please fill in a valid email-address and try again.</p>}
                    <ButtonFunction type="button"
                                    text="subscribe"
                                    style="button-function"
                                    onClick={handleSubmit}
                    />
                </article>
            </main>
        </>
    );
}
export default Home;