import {Star} from "@phosphor-icons/react";
import reactlogo from "/src/assets/react.svg";
import "./catalog.css"
import ButtonLink from "../../components/button-link/ButtonLink.jsx";
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";

const Catalog = () => {
    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>All the cocktails in the world</h2>
                    <ul className="products">
                        <li className="card-products">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star-catalog"/>
                            <span className="wrapper-catalog-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <ButtonLink path="/product" text="get to know me"/>
                        </li>
                        <li className="card-products">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star-catalog"/>
                            <span className="wrapper-catalog-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <ButtonLink path="/product" text="get to know me"/>
                        </li>
                        <li className="card-products">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star-catalog"/>
                            <span className="wrapper-catalog-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <ButtonLink path="/product" text="get to know me"/>
                        </li>
                        <li className="card-products">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star-catalog"/>
                            <span className="wrapper-catalog-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <ButtonLink path="/product" text="get to know me"/>
                        </li>
                        <li className="card-products">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star-catalog"/>
                            <span className="wrapper-catalog-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <ButtonLink path="/product" text="get to know me"/>
                        </li>
                        <li className="card-products">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star-catalog"/>
                            <span className="wrapper-catalog-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <ButtonLink path="/product" text="get to know me"/>
                        </li>
                    </ul>
                    <ButtonFunction type="button" text="load more"/>
                </div>
            </main>

        </>
    );
};

export default Catalog;