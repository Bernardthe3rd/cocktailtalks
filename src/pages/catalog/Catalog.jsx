import reactlogo from "/src/assets/react.svg";
import "./catalog.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import ProductCardSmall from "../../components/product-card-small/ProductCardSmall.jsx";

const Catalog = () => {
    //state
    //useEffect om eerste 6 cocktails op te halen
    //handleClick om meer cocktails te laden
    //error en loading state
    //id voor productpages
    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>All the cocktails in the world</h2>
                    <ul className="products">
                        {/*later mappen over de async axios request GET cocktails*/}
                        <ProductCardSmall source={reactlogo} alt="plaatje cocktail" id="product id"/>
                        <ProductCardSmall source={reactlogo} alt="plaatje cocktail" id="product id"/>
                        <ProductCardSmall source={reactlogo} alt="plaatje cocktail" id="product id"/>
                        <ProductCardSmall source={reactlogo} alt="plaatje cocktail" id="product id"/>
                        <ProductCardSmall source={reactlogo} alt="plaatje cocktail" id="product id"/>
                        <ProductCardSmall source={reactlogo} alt="plaatje cocktail" id="product id"/>
                    </ul>
                    <ButtonFunction type="button" text="load more" onClick="get more cocktails"/>
                </div>
            </main>

        </>
    );
};

export default Catalog;