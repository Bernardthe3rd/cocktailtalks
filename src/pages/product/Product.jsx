import "./product.css"
import ProductCardBig from "../../components/product-card-big/ProductCardBig.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Product = () => {
    let { id } = useParams();
    const [cocktailInfo, setCocktailInfo] = useState([])

    useEffect(() => {
        async function fetchCocktails () {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                console.log(response)
                setCocktailInfo(response.data.drinks)
            } catch (e) {
                console.error(e)
            }
        }
        void fetchCocktails();
    }, [id]);

    //Error & Loading
    return (
        <>
            <main className="container">
                    {cocktailInfo.map((cocktail) => {
                        return <div key={cocktail.idDrink} className="main--container__outer">
                            <h2>{cocktail.strDrink}</h2>
                            <ProductCardBig source={cocktail.strDrinkThumb} alt="plaatje cocktail" description={cocktail.strInstructions}/>
                        </div>
                    })}
            </main>
        </>
    );
};

export default Product;