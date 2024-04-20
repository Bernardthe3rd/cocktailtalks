import homeimg from "/src/assets/imgHomepage.jpg";
import "./about.css"
import ButtonLink from "../../components/button-link/ButtonLink.jsx";

const About = () => {
    return (
        <main className="container">
            <div className="about__div-container">
                <div className="about__div-box">
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
                        <ButtonLink path="/login" text="join us"/>
                    </article>
                </div>
                <span className="about__img-wrapper">
                    <img src={homeimg} alt="cocktail glasses"/>
                    <img src={homeimg} alt="cocktail glasses"/>
                </span>
            </div>
        </main>
    );
};

export default About;