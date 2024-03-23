import homeimg from "/src/assets/imgHomepage.jpg";
import "./home.css"
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <>
            <main className="container">
                <article className="home--article__container">
                    <div>
                        <h1>PHENOMENAL COCKTAIL. PHENOMENAL COMMUNITY.</h1>
                        <h3>From anywhere in the world,</h3>
                        <h3>For all cocktail fans here at CocktailTalks</h3>
                        <Link to="/about" className="button-link-main">about</Link>
                    </div>
                    <span className="img-wrapper-homeimg">
                        <img src={homeimg} alt="cocktail glasses"/>
                    </span>
                </article>
            </main>

        </>
    );
}
export default Home;