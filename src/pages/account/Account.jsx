import "./account.css"
import ProductCardReview from "../../components/product-card-review/ProductCardReview.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

const Account = () => {
    const { user } = useContext(AuthContext);

    const [disable, toggleDisable] = useState(false);
    const [cocktailInfo, setCocktailInfo] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    function handleClick () {
        toggleDisable(!disable);
        //post request met account meesturen
        //opslaan van cijfer en feedback text in account
    }

    async function getInfo () {
        const token = localStorage.getItem("token");
        try {
            const result = await axios.get(`https://api.datavortex.nl/cocktailtalks/users/${user.username}/info`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            console.log(result)
        } catch (e) {
            console.error(e)
        }
    }
    getInfo()

    useEffect(() => {
        const userCocktails = [15346, 14029, 178318]; //hier komt de array met cocktail ids van de gebruiker
        const controller = new AbortController();

        async function fetchFavoriteCocktails () {
            toggleLoading(true);
            let newArray = []
            for (let i = 0; i < userCocktails.length; i++) {
                try {
                    toggleError(false);
                    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${userCocktails[i]}`, {//nummer vervangen door ID of naam drink uit userinfo
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

    const control = cocktailInfo.map((item) => {
        return item[0]
    })
    console.log(control)

    return (
        <>
            <main className="container">
                {loading && <p className="loading">Loading...</p>}
                {error ? <p className="error">Er is iets misgegaan, klik op het logo om naar Home te gaan en kom later terug.</p> :
                <div className="container__div">
                    <h2>Your favorites</h2>
                    {control.map((cocktail) => {
                        return <ProductCardReview
                            key={cocktail.idDrink}
                            source={cocktail.strDrinkThumb}
                            alt="thumbnail cocktail"
                            nameProduct={cocktail.strDrink}
                            disable={disable}
                            clicked={handleClick}
                        />

                    })}
                </div>
                }
            </main>
        </>
    );
};

export default Account;