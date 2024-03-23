import {Star} from "@phosphor-icons/react";
import reactlogo from "/src/assets/react.svg";
import "./catalog.css"
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>All the cocktails in the world</h2>
                    <ul className="products">
                        <li className="product-card">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star"/>
                            <span className="wrapper-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <Link to="/about" className="button-link-main">get to know me</Link>
                        </li>
                        <li className="product-card">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star"/>
                            <span className="wrapper-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <Link to="/about" className="button-link-main">get to know me</Link>
                        </li>
                        <li className="product-card">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star"/>
                            <span className="wrapper-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <Link to="/about" className="button-link-main">get to know me</Link>
                        </li>
                        <li className="product-card">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star"/>
                            <span className="wrapper-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <Link to="/about" className="button-link-main">get to know me</Link>
                        </li>
                        <li className="product-card">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star"/>
                            <span className="wrapper-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <Link to="/about" className="button-link-main">get to know me</Link>
                        </li>
                        <li className="product-card">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="regular" className="star"/>
                            <span className="wrapper-product-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                            </span>
                            <Link to="/about" className="button-link-main">get to know me</Link>
                        </li>
                    </ul>
                    <button type="button" className="button-function">load more</button>
                </div>
            </main>

        </>
    );
};

export default Catalog;