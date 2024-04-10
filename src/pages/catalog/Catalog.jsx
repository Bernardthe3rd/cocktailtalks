import "./catalog.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import ProductCardSmall from "../../components/product-card-small/ProductCardSmall.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

const Catalog = () => {
    const [cocktails, setCocktails] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

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

    // const firstCocktails = cocktails.slice(0,6);
    // const moreCocktails = cocktails.slice(7,13);

    //useEffect om eerste 6 cocktails op te halen
    //handleClick om meer cocktails te laden
    //error en loading state

    return (
        <>
            <main className="container">
                {loading && <p className="loading">Loading...</p>}
                {error ? <p className="error">Er is iets misgegaan, klik op het logo om naar Home te gaan en kom later terug.</p> :
                <div className="main--container__outer">
                    <h2>All the cocktails in the world</h2>
                    <ul className="products">
                        {cocktails.map((cocktail) => {
                            return <ProductCardSmall name={cocktail.strDrink} source={cocktail.strDrinkThumb} alt="thumbnail cocktail" id={cocktail.idDrink}/>
                        })}
                        {/*later mappen over de async axios request GET cocktails*/}
                        {/*{moreCocktails.map((cocktail) => {*/}
                        {/*    return <ProductCardSmall name={cocktail.strDrink} source={cocktail.strDrinkThumb} alt="thumbnail cocktail" id={cocktail.idDrink}/>*/}
                        {/*})}*/}
                    </ul>
                    <ButtonFunction type="button" text="load more"/>
                </div>
                }
            </main>

        </>
    );
};

export default Catalog;