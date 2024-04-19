import "./catalog.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import ProductCardSmall from "../../components/product-card-small/ProductCardSmall.jsx";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const Catalog = () => {
    const { user } = useContext(AuthContext);

    const [cocktails, setCocktails] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [endingCocktail, setEndingCocktail] = useState(6);
    // const [userInfo, setUserInfo] = useState([])

    const firstCocktails = cocktails.slice(0,endingCocktail);

    useEffect(() => {
        async function fetchCocktails () {
            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
                console.log(response)
                setCocktails(response.data.drinks)
            } catch (e) {
                console.error(e)
                toggleError(true);
            }
            toggleLoading(false);
        }
        void fetchCocktails();
    }, []);


    function showMoreCocktails () {
        setEndingCocktail(endingCocktail+6)
    }


    return (
        <>
            <main className="container">
                {loading && <p className="loading">Loading...</p>}
                {error ? <p className="error">Er is iets misgegaan, klik op het logo om naar Home te gaan en kom later terug.</p> :
                <div className="container__div">
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
                    <ButtonFunction type="button" text="load more" onClick={showMoreCocktails}/>
                </div>
                }
            </main>

        </>
    );
};

export default Catalog;