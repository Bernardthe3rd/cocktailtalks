import homeimg from "/src/assets/imgHomepage.jpg";
import "./about.css"
import ButtonLink from "../../components/button-link/ButtonLink.jsx";

const About = () => {
    return (
        <>
            <main className="container">
                <div className="about__div-container">
                    <div className="about__div-box">
                        <h3>Our story - How CocktailTalk started</h3>
                        <article className="about__article">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet atque aut consequuntur deserunt dolor doloremque dolores doloribus ducimus eaque eius eos error esse fugiat fugit hic iste magni mollitia optio possimus quasi quis quo, quod sequi suscipit tenetur ullam veritatis vero voluptates voluptatibus? Corporis deleniti est fugiat hic id illo odit quia! Aliquid autem consequatur corporis dolores est illo magnam maiores maxime mollitia? Ad aperiam cum dolor dolores est harum hic, laborum laudantium libero natus nulla obcaecati quisquam saepe similique ut vel vero? Ab adipisci aspernatur deleniti dolorem ea enim ex, expedita facere iste iusto necessitatibus nemo nesciunt nihil, nulla odio porro quaerat quas qui repellat repellendus sint velit veritatis voluptates. Ad adipisci enim, eum fuga qui quod sed temporibus ullam! Adipisci aliquid dolorem enim expedita iste nostrum sit soluta sunt. A adipisci aliquid animi distinctio doloribus dolorum eos et ex expedita harum, in ipsam laboriosam laborum libero magnam minus nam neque nihil nostrum nulla odio odit porro praesentium provident quas quibusdam quis reiciendis sit suscipit tempora totam ut veniam vero voluptate voluptatem voluptatibus voluptatum? Ab aspernatur dolores nam placeat quidem quo ratione recusandae reiciendis saepe voluptatum. Autem obcaecati, perspiciatis praesentium suscipit temporibus voluptatibus! Aliquam aperiam architecto blanditiis, debitis dolore earum est expedita facere fugit impedit iste laboriosam maxime, odio perferendis quas rem saepe sequi tempore veritatis voluptate? Nulla, sapiente, ullam. Accusamus aliquam aperiam beatae corporis, ducimus error eveniet ex illo inventore ipsum iste iusto laudantium maiores necessitatibus non, nostrum nulla obcaecati odit perferendis, repellat sapiente sint unde voluptatum?</p>
                            <ButtonLink path="/login" text="join us"/>
                        </article>
                    </div>
                    <span className="about__img-wrapper">
                        <img src={homeimg} alt="cocktail glasses"/>
                        <img src={homeimg} alt="cocktail glasses"/>
                    </span>
                </div>
            </main>
        </>
    );
};

export default About;