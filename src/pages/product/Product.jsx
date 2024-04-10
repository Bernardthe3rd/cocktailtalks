import "./product.css"
import ProductCardBig from "../../components/product-card-big/ProductCardBig.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Product = () => {
    let { id } = useParams();
    const [cocktailInfo, setCocktailInfo] = useState([])
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function fetchCocktails () {
            toggleLoading(true);
            try {
                toggleError(false);
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                console.log(response);
                setCocktailInfo(response.data.drinks);
            } catch (e) {
                console.error(e)
                toggleError(true);
            }
            toggleLoading(false);
        }
        void fetchCocktails();
    }, [id]);

    return (
        <>
            {loading && <p className="loading">Loading...</p>}
            {error ? <p className="error">Er is iets misgegaan, klik op het logo om naar Home te gaan en kom later terug.</p> :
            <main className="container">
                    {cocktailInfo.map((cocktail) => {
                        return <div key={cocktail.idDrink} className="main--container__outer">
                            <h2>{cocktail.strDrink}</h2>
                            <ProductCardBig source={cocktail.strDrinkThumb} alt="plaatje cocktail" description={cocktail.strInstructions}/>
                        </div>
                    })}
            </main>
            }
        </>
    );
};

export default Product;