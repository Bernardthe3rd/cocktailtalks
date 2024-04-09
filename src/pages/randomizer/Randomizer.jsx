import {Star} from "@phosphor-icons/react";
import "./randomizer.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import axios from "axios";
import {useState} from "react";
import {checkValue} from "../../helpers/checkValue.js";

const Randomizer = () => {
    const [randomDrink, setRandomDrink] = useState([]);

    async function fetchRandomCocktail () {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            setRandomDrink(response.data.drinks)
            console.log(response.data.drinks)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>Push to get inspired!</h2>
                    <ButtonFunction type="button" text="PUSH" onClick={fetchRandomCocktail}/>
                    {randomDrink.map((drink) => {
                        return <article key={drink.idDrink} className="card-product-randomizer">
                            <span className="wrapper-img-randomizer">
                                <img src={drink.strDrinkThumb} alt="Thumbnail random drink"/>
                            </span>
                            <div className="text-product-randomizer">
                                <h3>{drink.strDrink}</h3>
                                <p>Things you need:</p>
                                <ul>
                                    <li>{drink.strGlass}</li>
                                    {checkValue(drink.strIngredient1) !== "" && <li>{checkValue(drink.strIngredient1)}</li>}
                                    {checkValue(drink.strIngredient2) !== "" && <li>{checkValue(drink.strIngredient2)}</li>}
                                    {checkValue(drink.strIngredient3) !== "" && <li>{checkValue(drink.strIngredient3)}</li>}
                                    {checkValue(drink.strIngredient4) !== "" && <li>{checkValue(drink.strIngredient4)}</li>}
                                    {checkValue(drink.strIngredient5) !== "" && <li>{checkValue(drink.strIngredient5)}</li>}
                                    {checkValue(drink.strIngredient6) !== "" && <li>{checkValue(drink.strIngredient6)}</li>}
                                    {checkValue(drink.strIngredient7) !== "" && <li>{checkValue(drink.strIngredient7)}</li>}
                                    {checkValue(drink.strIngredient8) !== "" && <li>{checkValue(drink.strIngredient8)}</li>}
                                    {checkValue(drink.strIngredient9) !== "" && <li>{checkValue(drink.strIngredient9)}</li>}
                                    {checkValue(drink.strIngredient10) !== "" && <li>{checkValue(drink.strIngredient10)}</li>}
                                    {checkValue(drink.strIngredient11) !== "" && <li>{checkValue(drink.strIngredient11)}</li>}
                                    {checkValue(drink.strIngredient12) !== "" && <li>{checkValue(drink.strIngredient12)}</li>}
                                    {checkValue(drink.strIngredient13) !== "" && <li>{checkValue(drink.strIngredient13)}</li>}
                                    {checkValue(drink.strIngredient14) !== "" && <li>{checkValue(drink.strIngredient14)}</li>}
                                    {checkValue(drink.strIngredient15) !== "" && <li>{checkValue(drink.strIngredient15)}</li>}
                                </ul>
                                <p>{drink.strInstructions}</p>
                            </div>
                            <Star size={100} color="#FFB985" alt="StarIcon icon" weight="regular" className="star-product"/>
                        </article>
                    })}
                </div>
            </main>

        </>
    );
};

export default Randomizer;