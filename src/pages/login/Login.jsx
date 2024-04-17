import "./login.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

//test username & email = benjaminmeijer1@gmail.com
//test password = BenjaminMeijer

const Login = () => {
    const { login } = useContext(AuthContext);
    // const [error, setError] = useState({});
    // const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const apiKey = "cocktailtalks:JmnVqzgJyhYDbqyQauOT"

    //Handle login
    async function handleLogin (e) {
        e.preventDefault();
        try {
            const response = await axios.post("https://api.datavortex.nl/cocktailtalks/users/authenticate", {
                username: email,
                password: password,
            })
            if (response.status === 200) {
                login(response.data.jwt)
                navigate("/account");
            }
        } catch (e) {
            console.error(e)
        }
    }

    //Handle Registration
    async function handleRegister (e) {
        e.preventDefault()
        try {
            const response = await axios.post("https://api.datavortex.nl/cocktailtalks/users", {
                username: email,
                email: email,
                password: password,
                info: "",
                authorities: [
                    {
                        authority: "USER"
                    }
                ]
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key":apiKey,
                }
            })
            console.log(response)
            console.log("Gebruiker is succesvol geregistreerd")
        } catch (e) {
            console.error(e)
        }
        navigate("/");
    }
    //navigate to een voor login en register

    //later bij authenticatie validate email en password ism helpers
    return (
        <main className="container">
            <div className="container__div">
                <h2>Welcome!</h2>
                <h3>Ready to explore some cocktails?</h3>
                <form className="login__form">
                    <InputField label="Email:" id="field-email" name="email" type="text" handleChange={(e) => setEmail(e.target.value)}/>
                    <InputField label="Password:" id="field-password" name="password" type="password" handleChange={(e) => setPassword(e.target.value)}/>
                    <a href="mailto:benjaminmeijer1@gmail.com">Forgot password?</a>
                    <div className="login__div">
                        <ButtonFunction type="submit" text="log in" onClick={handleLogin}/>
                        <ButtonFunction type="submit" text="register" onClick={handleRegister}/>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;