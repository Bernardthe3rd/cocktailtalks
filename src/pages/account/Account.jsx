import "./account.css"
import ProductCardReview from "../../components/product-card-review/ProductCardReview.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

const Account = () => {
    const { user } = useContext(AuthContext);

    const [cocktailInfo, setCocktailInfo] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [errorNoCocktails, toggleErrorNoCocktails] = useState(false);

    //Automatically fetch the favorite cocktails from the user on mount.
    useEffect(() => {
        const controller = new AbortController();

        let userCocktails = []
        if (user.info) {
            userCocktails = JSON.parse(user.info);
        }
        else {
            toggleErrorNoCocktails(true);
        }

        const userCocktailsArray = userCocktails.map(cocktail => cocktail.id);

        async function fetchFavoriteCocktails () {
            toggleLoading(true);
            let newArray = []
            try {
                for (let i = 0; i < userCocktailsArray.length; i++) {
                    toggleError(false);
                    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${userCocktailsArray[i]}`, {//nummer vervangen door ID of naam drink uit userinfo
                        signal: controller.signal,
                    })
                    newArray.push(response.data.drinks)

                }
                setCocktailInfo(newArray);
            } catch (e) {
                    console.error(e.message)
                    toggleError(true);
                }
            toggleLoading(false);
        }
        void fetchFavoriteCocktails();

        return function cleanup() {
            if (controller.signal.aborted) {
                controller.abort();
            }
        }

    }, []);

    const cocktailInfoForUser = cocktailInfo.map((cocktail) => {
        return cocktail[0];
    })


    return (
        <>
            <main className="container">
                {loading && <p className="loading">Loading...</p>}
                {errorNoCocktails && <p className="error">Je hebt op dit moment nog geen cocktails in jouw account staan, ga naar de catalog pagina om er een te favorieten!</p>}
                {error ? <p className="error">Something went wrong fetching the cocktails, click on the logo to return home and try again later.</p> :
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