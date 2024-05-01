import "./product.css"
import ProductCardBig from "../../components/product-card-big/ProductCardBig.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Product = () => {
    let { id } = useParams();

    const [cocktailInfo, setCocktailInfo] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [ingredientsArray, setIngredientsArray] = useState([]);

    //Automatically fetch the right information from the selected product in the catalog page on mount.
    useEffect(() => {
        const controller = new AbortController();
        async function fetchCocktails () {
            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, {
                    signal: controller.signal,
                })
                setCocktailInfo(response.data.drinks);
                setIngredientsArray (
                    [response.data.drinks[0].strIngredient1
                        ,response.data.drinks[0].strIngredient2
                        ,response.data.drinks[0].strIngredient3
                        ,response.data.drinks[0].strIngredient4
                        ,response.data.drinks[0].strIngredient5
                        ,response.data.drinks[0].strIngredient6
                        ,response.data.drinks[0].strIngredient7
                        ,response.data.drinks[0].strIngredient8
                        ,response.data.drinks[0].strIngredient9
                        ,response.data.drinks[0].strIngredient10
                        ,response.data.drinks[0].strIngredient11
                        ,response.data.drinks[0].strIngredient12
                        ,response.data.drinks[0].strIngredient13
                        ,response.data.drinks[0].strIngredient14
                        ,response.data.drinks[0].strIngredient15])
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }
        void fetchCocktails();

        return function cleanup() {
            if (controller.signal.aborted) {
                controller.abort();
            }
        }

    }, [id]);

    return (
        <main>
            {loading && <p className="loading">Loading...</p>}
            {error ? <p className="error">Something went wrong fetching the right cocktail for you, please return to the catalog page via the navigation and try again.</p> :
            <section className="container">
                    {cocktailInfo.map((cocktail) => {
                        return <div key={cocktail.idDrink} className="container__div">
                            <h2>{cocktail.strDrink}</h2>
                            <ProductCardBig
                                id={cocktail.idDrink}
                                source={cocktail.strDrinkThumb}
                                alt="plaatje cocktail"
                                glass={cocktail.strGlass}
                                preparing={cocktail.strInstructions}
                                ingredients={ingredientsArray}
                            />
                        </div>
                    })}
            </section>
            }
        </main>
    );
};

export default Product;