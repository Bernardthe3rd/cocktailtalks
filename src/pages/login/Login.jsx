import "./login.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";
import {validateEmail} from "../../helpers/validateEmail.js";
import Home from "../home/Home.jsx";

//test username & email = benjaminmeijer1@gmail.com
//test password = BenjaminMeijer
// test username & email two = hello@hello.com
// password = hello123
//test nog een = goodbye@hello.com
// password = goodbye123

const Login = () => {
    const { login } = useContext(AuthContext);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [registered, setRegistered] = useState(false);
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
                login(response.data.jwt);
                navigate("/account");
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (!validateEmail(email) && email.length > 0) {
            setErrorEmail(true);
            console.error("verkeerde email");
        } else {
            setErrorEmail(false);
            console.log("juiste email");
        }

        if (password.length < 8 && password.length > 0) {
            setErrorPassword(true);
            console.error("ww te kort");
        } else  {
            setErrorPassword(false);
            console.log("prima ww");
        }
    }, [email,password]);


    //Handle Registration
    async function handleRegister (e) {
        e.preventDefault()
        setRegistered(false);
        if (!errorEmail && !errorPassword && email.length !== 0 && password.length !== 0) {
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
                console.log(response);
                console.log("Gebruiker is succesvol geregistreerd");
                setRegistered(true);
            } catch (e) {
                console.error(e);
            }
            navigate("/");
        }
    }
    //navigate to een voor login en register

    //later bij authenticatie validate email en password ism helpers
    return (
        <main className="container">
            <div className="container__div">
                <h2>Welcome!</h2>
                <h3>Ready to explore some cocktails?</h3>
                <form className="login__form">
                    <InputField label="Email:"
                                id="field-email"
                                name="email"
                                type="text"
                                handleChange={(e) => setEmail(e.target.value)}
                    />
                    {errorEmail &&  <p>Fill in a valid email address.</p>}
                    <InputField label="Password:"
                                id="field-password"
                                name="password"
                                type="password"
                                handleChange={(e) => setPassword(e.target.value)}
                    />
                    {errorPassword && <p>Your password was to short, must be over 8 characters.</p>}
                    <a href="mailto:benjaminmeijer1@gmail.com">Forgot password?</a>
                    <div className="login__div">
                        <ButtonFunction type="submit" text="log in" onClick={handleLogin}/>
                        <ButtonFunction type="submit" text="register" onClick={handleRegister}/>
                    </div>
                </form>
            </div>
            {registered && <Home registrationSucces={registered}/>}
        </main>
    );
};

export default Login;