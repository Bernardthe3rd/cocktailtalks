import "./login.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";

const Login = () => {
    return (
        <>
            <main className="container">
                <div className="main--container__outer">
                    <h2>Welcome (back)!</h2>
                    <h3>Ready to explore some cocktails?</h3>
                    <form className="form-container">
                        <label htmlFor="field-email" className="label-style-login">
                            Email:
                            <input type="text" id="field-email" name="email" className="input-text-field"/>
                        </label>
                        <label htmlFor="field-password" className="label-style-login">
                            Password:
                            <input type="password" id="field-password" name="password" className="input-text-field"/>
                            <a href="mailto:benjaminmeijer1@gmail.com">Forgot password?</a>
                        </label>
                        <div className="login--div__button">
                            <ButtonFunction type="submit" text="log in"/>
                            <ButtonFunction type="submit" text="register"/>
                        </div>
                    </form>
                </div>
            </main>

        </>
    );
};

export default Login;