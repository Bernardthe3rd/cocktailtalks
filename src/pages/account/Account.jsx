import "./account.css"
import reactlogo from "/src/assets/react.svg";
import ProductCardReview from "../../components/product-card-review/ProductCardReview.jsx";
import {useState} from "react";

const Account = () => {
    const [disable, toggleDisable] = useState(false);

    function handleClick () {
        toggleDisable(!disable);
    }

    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>Your favorites</h2>
                    <ProductCardReview source={reactlogo} alt="picture cocktail" nameProduct="naam vd cocktail" disable={disable} clicked={handleClick}/>
                    <ProductCardReview source={reactlogo} alt="picture cocktail" nameProduct="naam vd cocktail 2" disable={disable} clicked={handleClick}/>
                </div>
            </main>
        </>
    );
};

export default Account;