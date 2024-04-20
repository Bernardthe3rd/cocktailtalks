import homeimg from "/src/assets/imgHomepage.jpg";
import "./home.css"
import ButtonLink from "../../components/button-link/ButtonLink.jsx";
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import { useState} from "react";


const Home = ({registrationSucces}) => {
    const [formState, setFormState] = useState({})

    function handleEmailChange (f) {
        setFormState({
            ...formState,
            [f.target.name]: f.target.value,
        })
    }
    function handleSubmit (e) {
        e.preventDefault();
        console.log(
            formState
        )
        // setFormState("")
    }


    return (
        <>
            <main className="container">
                <article className="home__article-upper">
                    {registrationSucces && <p>Your registration has been succesfull. You can now go back to login.</p>}
                    <div className="home__div-content">
                        <h1>PHENOMENAL COCKTAIL. PHENOMENAL COMMUNITY.</h1>
                        <h3>From anywhere in the world, <br/> For all cocktail fans here at CocktailTalks</h3>
                        {/*<h3>For all cocktail fans here at CocktailTalks</h3>*/}
                        <ButtonLink path="/about" text="about"/>
                    </div>
                    <span className="home__img-wrapper">
                        <img src={homeimg} alt="cocktail glasses"/>
                    </span>
                </article>
                <article className="home__article-bottom">
                    <h2>Want to be notified about the latest updates?</h2>
                    <InputField name="email newsletter" type="text" placeholder="Email" handleChange={handleEmailChange}/>
                    <ButtonFunction type="button" text="subscribe" onClick={handleSubmit}/>
                </article>
            </main>
        </>
    );
}
export default Home;