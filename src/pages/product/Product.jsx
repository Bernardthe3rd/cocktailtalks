import reactlogo from "/src/assets/react.svg";
import "./product.css"
import ProductCardBig from "../../components/product-card-big/ProductCardBig.jsx";
const Product = () => {
    //informatie over het product doorsturen
    //useEffect
    //Error & Loading
    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>Name of the product</h2>
                    <ProductCardBig source={reactlogo} alt="plaatje cocktail" description="tekst over deze cocktail"/>
                </div>
            </main>
        </>
    );
};

export default Product;