import "./catalog.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import ProductCardSmall from "../../components/product-card-small/ProductCardSmall.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

const Catalog = () => {

    const [cocktails, setCocktails] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [endingCocktail, setEndingCocktail] = useState(6);

    const firstCocktails = cocktails.slice(0,endingCocktail);

    //Automatically fetch the first six cocktails on mount.
    useEffect(() => {
        const controller = new AbortController();

        async function fetchCocktails () {
            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", {
                    signal: controller.signal,
                })
                setCocktails(response.data.drinks);
            } catch (e) {
                if (!controller.signal.aborted) {
                    console.error(e);
                    toggleError(true);
                }
            }
            toggleLoading(false);
        }
        void fetchCocktails();

        return function cleanup() {
            if (controller.signal.aborted) {
                controller.abort();
            }
        }
    }, []);

    //by Onclick fetch six more cocktails.
    function showMoreCocktails () {
        setEndingCocktail(endingCocktail+6);
    }


    return (
        <main className="container">
            {loading && <p className="loading">Loading...</p>}
            {error ? <p className="error">Something went wrong fetching the data, please return home by clicking to logo and try again later.</p> :
            <section className="container__div">
                <h2>All the cocktails in the world</h2>
                <ul className="products">
                    {firstCocktails.map((cocktail) => {
                        return <ProductCardSmall
                                key={cocktail.idDrink}
                                name={cocktail.strDrink}
                                source={cocktail.strDrinkThumb}
                                alt="thumbnail cocktail"
                                id={cocktail.idDrink}
                        />
                    })}
                </ul>
                <ButtonFunction type="button"
                                text="load more"
                                style="button-function"
                                onClick={showMoreCocktails}
                />
            </section>
                }
        </main>
    );
};

export default Catalog;