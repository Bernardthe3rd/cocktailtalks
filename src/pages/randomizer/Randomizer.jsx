import reactlogo from "../../assets/react.svg";
import {Star} from "@phosphor-icons/react";
import "./randomizer.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";

const Randomizer = () => {
    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>Push to get inspired!</h2>
                    <ButtonFunction type="button" text="PUSH"/>
                    <article className="card-product">
                        <span className="wrapper-product-img">
                            <img src={reactlogo} alt="tijdelijke logo react"/>
                        </span>
                            <label htmlFor="information-product" className="label-style-product">
                            Name of product here
                                <textarea name="product info" id="information-product" cols="50" rows="13"
                                      className="text-box-product">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium mollitia quaerat unde. Accusantium alias amet animi assumenda at blanditiis consectetur consequatur cupiditate dicta dolorem eius, enim excepturi, explicabo facere fugit illo illum incidunt inventore laborum mollitia nesciunt numquam obcaecati perferendis perspiciatis quae ratione sapiente, sequi sint sunt ullam? Commodi, dolore molestias? Consequuntur corporis eius eligendi, excepturi fugit inventore ipsa minus molestias, provident quo totam veritatis voluptates? Accusantium aliquid ducimus harum iure nemo optio possimus quod similique ullam voluptatum? Aperiam architecto blanditiis cupiditate distinctio error, nostrum provident quos. Ab accusantium alias asperiores atque delectus deserunt dignissimos dolor dolores eius, est eum excepturi expedita fuga illo inventore minus nostrum odit officiis omnis pariatur quis quisquam repellat sequi tempora ullam vel veniam voluptas? A at, cumque doloremque eius error exercitationem ipsum laboriosam laborum maxime placeat totam voluptates? Aliquam architecto beatae, consectetur dicta dignissimos doloribus est excepturi exercitationem, explicabo ipsa quo repellat voluptates. Ab, aliquam aspernatur dolorem ducimus eaque odit quidem recusandae tempora voluptatem! Architecto aspernatur autem blanditiis culpa, delectus dolor dolore eos esse explicabo facilis fuga illo impedit incidunt labore laboriosam molestiae nam neque non optio pariatur quaerat quam quas quisquam tenetur totam ut voluptate! Accusamus architecto, asperiores beatae doloribus porro sunt tenetur?
                            </textarea>
                            </label>
                        <Star size={100} color="#FFB985" alt="Star icon" weight="regular" className="star-product"/>
                    </article>
                </div>
            </main>

        </>
    );
};

export default Randomizer;