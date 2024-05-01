import ButtonLink from "../../components/button-link/ButtonLink.jsx";

const NotFound = () => {

    return (
        <main className="container">
            <div className="container__div">
                <h1>NotFound</h1>
                <p>OOPS... You got a bit lost I see, you can easily follow your path by clicking the following button:</p>
                <ButtonLink path="/"
                            text="lets go back home"
                />
            </div>
        </main>
    );
};

export default NotFound;