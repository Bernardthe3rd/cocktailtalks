import "./randomizer.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import axios from "axios";
import {useState} from "react";

import ProductCardBig from "../../components/product-card-big/ProductCardBig.jsx";

const Randomizer = () => {
    const [randomDrink, setRandomDrink] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [ingredientsArray, setIngredientsArray] = useState([]);

    async function fetchRandomCocktail () {
        toggleLoading(true);

        try {
            toggleError(false);
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            setRandomDrink(response.data.drinks);
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

    return (
        <>
            <main className="container">
                {error ? <p className="error">Er is iets misgegaan, klik op het logo om naar Home te gaan en kom later terug.</p> :
                <div className="container__div">
                    <h2>Push to get inspired!</h2>
                    <ButtonFunction type="button" text="PUSH" style="button-push" onClick={fetchRandomCocktail}/>
                    {loading && <p className="loading">Loading...</p>}
                    {randomDrink.map((drink) => {
                        return <ProductCardBig
                            key={drink.idDrink}
                            id={drink.idDrink}
                            source={drink.strDrinkThumb}
                            alt="thumbnail cocktail"
                            description={drink.strDrink}
                            glass={drink.strGlass}
                            preparing={drink.strInstructions}
                            ingredients={ingredientsArray}
                        />
                    })}
                </div>
                }
            </main>

        </>
    );
};

export default Randomizer;