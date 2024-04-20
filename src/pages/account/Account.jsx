import "./account.css"
import ProductCardReview from "../../components/product-card-review/ProductCardReview.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

const Account = () => {
    const { user } = useContext(AuthContext);

    const [userCocktails, setUserCocktails] = useState(JSON.parse(user.info));
    const [cocktailInfo, setCocktailInfo] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);


    useEffect(() => {//hier komt de array met cocktail ids van de gebruiker
        const controller = new AbortController();

        if (JSON.parse(user.info).length > 0) {
            setUserCocktails(JSON.parse(user.info))
        } else {
            setUserCocktails(userCocktails)
        }

        const userCocktailsArray = userCocktails.map(cocktail => cocktail.id)
        console.log(userCocktailsArray)

        async function fetchFavoriteCocktails () {
            toggleLoading(true);
            let newArray = []
            for (let i = 0; i < userCocktailsArray.length; i++) {
                try {
                    toggleError(false);
                    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${userCocktailsArray[i]}`, {//nummer vervangen door ID of naam drink uit userinfo
                        signal: controller.signal,
                    })
                    newArray.push(response.data.drinks)
                } catch (e) {
                    console.error(e)
                    toggleError(true);
                }
                setCocktailInfo(newArray);
            }
            toggleLoading(false);
        }
        void fetchFavoriteCocktails();

        // return function cleanup() {
        //     controller.abort();
        // } kijken hoe werkend te krijgen gezien hij direct de fetch cancelled..

    }, []);

    const cocktailInfoForUser = cocktailInfo.map((cocktail) => {
        return cocktail[0]
    })


    return (
        <>
            <main className="container">
                {loading && <p className="loading">Loading...</p>}
                {error ? <p className="error">Er is iets misgegaan, klik op het logo om naar Home te gaan en kom later terug.</p> :
                <div className="container__div">
                    <h2>Your favorites</h2>
                    {cocktailInfoForUser.map((cocktail) => {
                        return <ProductCardReview
                            key={cocktail.idDrink}
                            id={cocktail.idDrink}
                            source={cocktail.strDrinkThumb}
                            alt="thumbnail cocktail"
                            nameProduct={cocktail.strDrink}
                        />

                    })}
                </div>
                }
            </main>
        </>
    );
};

export default Account;