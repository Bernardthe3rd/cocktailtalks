import {Star} from "@phosphor-icons/react";
import reactlogo from "../../assets/react.svg";
import {Link} from "react-router-dom";
import "./account.css"

const Account = () => {
    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>Your favorites</h2>
                    <article className="card-review">
                        <span className="wrapper-review-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                        </span>
                        <form className="form-feedback">
                            <label htmlFor="input-grade">
                                Grade:
                                <input type="text" id="input-grade" name="grade" className="input-grade-field"
                                       disabled={true}/>
                            </label>
                            <label htmlFor="feedback-are" className="label-style-account">
                                Feedback:
                                <textarea name="feedback" id="feedback-area" cols="50" rows="10" disabled={true}
                                          placeholder="Write your feedback here" className="text-box-review"/>
                            </label>
                        </form>
                        <div className="account--div__btnstar">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="fill" className="star-review"/>
                            <Link to="/product" className="button-link-main">edit</Link>
                        </div>
                    </article>
                    <article className="card-review">
                        <span className="wrapper-review-img">
                                <img src={reactlogo} alt="tijdelijk plaatje react"/>
                        </span>
                        <form className="form-feedback">
                            <label htmlFor="input-grade">
                                Grade:
                                <input type="text" id="input-grade" name="grade" className="input-grade-field"
                                       disabled={false}/>
                            </label>
                            <label htmlFor="feedback-are" className="label-style-account">
                                Feedback:
                                <textarea name="feedback" id="feedback-area" cols="50" rows="10" disabled={false}
                                          placeholder="Write your feedback here" className="text-box-review"/>
                            </label>
                        </form>
                        <div className="account--div__btnstar">
                            <Star size={50} color="#FFB985" alt="Star icon" weight="fill" className="star-review"/>
                            <Link to="/product" className="button-link-main">edit</Link>
                        </div>
                    </article>
                </div>
            </main>
        </>
    );
};

export default Account;