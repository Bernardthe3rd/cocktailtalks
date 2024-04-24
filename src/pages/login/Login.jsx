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
//meike@vanderkuip.com
//Puffy2024!

const Login = ({setReg}) => {
    const { login, apiKey } = useContext(AuthContext);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disableBtn, toggleDisableBtn] = useState(null);
    const navigate = useNavigate();

    //Handle Email and password validations
    useEffect(() => {
        if (!validateEmail(email) && email.length > 0) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }

        if (password.length < 8 && password.length > 0) {
            setErrorPassword(true);
        } else  {
            setErrorPassword(false);
        }
    }, [email,password]);

    useEffect(() => {
        if (errorEmail || errorPassword) {
            toggleDisableBtn(true);
        } else {
            toggleDisableBtn(false);
        }
    }, [errorEmail, errorPassword]);

    //Handle login
    async function handleLogin (e) {
        e.preventDefault();
        toggleLoading(true)
        try {
            toggleError(false)
            const response = await axios.post("https://api.datavortex.nl/cocktailtalks/users/authenticate", {
                username: email,
                password: password,
            })
            if (response.status === 200) {
                toggleLoading(false)
                login(response.data.jwt);
                navigate("/account");
            }
        } catch (e) {
            console.error(e);
            toggleError(true);
            toggleLoading(false);
        }
    }

    //Handle Registration
    async function handleRegister (e) {
        e.preventDefault()
        setReg(false);
        toggleLoading(true);
        if (!errorEmail && !errorPassword && email.length !== 0 && password.length !== 0) {
            try {
                toggleError(false);
                const response = await axios.post("https://api.datavortex.nl/cocktailtalks/users", {
                    username: email,
                    email: email,
                    password: password,
                    info: "", //json.parse error oplossen.
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
                setReg(true);
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                toggleError(true);
                toggleLoading(false);
            }
            navigate("/");
        }
    }

    return (
        <main className="container">
            {loading && <p className="loading">Loading...</p>}
            {error ? <p className="error">Er is iets misgegaan, klik op het logo om naar Home te gaan en kom later terug.</p> :
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
                        <ButtonFunction type="submit"
                                        text="log in"
                                        disable={disableBtn}
                                        onClick={handleLogin}
                        />
                        <ButtonFunction type="submit"
                                        text="register"
                                        disable={disableBtn}
                                        onClick={handleRegister}
                        />
                    </div>
                </form>
            </div>
            }
        </main>
    );
};

export default Login;