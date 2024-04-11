import "./account.css"
import reactlogo from "/src/assets/react.svg";
import ProductCardReview from "../../components/product-card-review/ProductCardReview.jsx";
import {useState} from "react";
import axios from "axios";

const Account = () => {
    const [disable, toggleDisable] = useState(false);
    const [cocktailInfo, setCocktailInfo] = useState([]);

    function handleClick () {
        toggleDisable(!disable);
        //post request met account meesturen
    }

    async function fetchFavoriteCocktails () {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`)
            console.log(response.data.drinks);
            setCocktailInfo(response.data.drinks);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>Your favorites</h2>
                    {cocktailInfo.map((cocktail) => {
                        return <ProductCardReview key={cocktail.idDrink} source={cocktail.strDrinkThumb} alt="thumbnail cocktail" nameProduct={cocktail.strDrink} disable={disable} clicked={handleClick}/>

                    })}
                    <ProductCardReview source={reactlogo} alt="picture cocktail" nameProduct="naam vd cocktail 2" disable={disable} clicked={fetchFavoriteCocktails}/>
                </div>
            </main>
        </>
    );
};

export default Account;