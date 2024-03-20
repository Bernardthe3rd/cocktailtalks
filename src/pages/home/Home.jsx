import logo from "/src/assets/CTlogo.png"
import homeimg from "/src/assets/landingpage-afb.jpg"
import "./home.css"
import {Link, NavLink} from "react-router-dom";
const Home = () => {
    return (
        <>
            <header>
                <nav className="container">
                    <ul className="navbar-container">
                        <li><NavLink to="/catalog" className="button-link">catalog</NavLink></li>
                        <li><NavLink to="/about">about</NavLink></li>
                        <li>
                            <span className="img-wrapper-logo">
                                <img src={logo} alt="logo cocktailtalks"/>
                            </span>
                        </li>
                        <li><NavLink to="/randomizer">randomizer</NavLink></li>
                        <li><NavLink to="/login">account</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main className="container">
                <article className="home--article__container">
                    <div className="home--content__container">
                        <h1>PHENOMENAL COCKTAIL. PHENOMENAL COMMUNITY.</h1>
                        <h3>From anywhere in the world,</h3>
                        <h3>For all cocktail fans here at CocktailTalks</h3>
                        <Link to="/about">about</Link>
                    </div>
                    <span className="img-wrapper-homeimg">
                        <img src={homeimg} alt="cocktail glasses"/>
                    </span>
                </article>
            </main>

        </>
    );
};

export default Home;