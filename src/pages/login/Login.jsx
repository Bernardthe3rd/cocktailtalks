import "./login.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import {validateEmail} from "../../helpers/validateEmail.js";
import {useNavigate} from "react-router-dom";

//meike@vanderkuip.com
//Puffy2024!
//hello4@hello.com
//hello789

const Login = ({setReg}) => {
    const { login, apiKey } = useContext(AuthContext);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disableBtn, toggleDisableBtn] = useState(true);
    const navigate = useNavigate();

    const [showLogin, toggleShowLogin] = useState(true);
    const [showRegister, toggleShowRegister] = useState(false);
    const [styleLogin, setStyleLogin] = useState("button-function__login-active");
    const [styleRegister, setStyleRegister] = useState("button-function__login-default");


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
        if (errorEmail || errorPassword || email.length === 0 || password.length === 0) {
            toggleDisableBtn(true);
        } else {
            toggleDisableBtn(false);
        }
    }, [errorEmail, errorPassword]);


    //Handle login
    async function handleLogin (e) {
        e.preventDefault();
        if (!errorEmail && !errorPassword && email.length !== 0 && password.length !== 0) {
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
    }

    //Handle Registration
    async function handleRegister (e) {
        e.preventDefault()
        if (!errorEmail && !errorPassword && email.length !== 0 && password.length !== 0) {
        setReg(false);
        toggleLoading(true);
            try {
                toggleError(false);
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

    function handleShowLogin () {
        toggleShowLogin(true);
        toggleShowRegister(false);
        setStyleLogin("button-function__login-active");
        setStyleRegister("button-function__login-default")
    }

    function handleShowRegister () {
        toggleShowRegister(true);
        toggleShowLogin(false);
        setStyleLogin("button-function__login-default")
        setStyleRegister("button-function__login-active")
    }

    return (
        <main className="container">
            {loading && <p className="loading">Loading...</p>}
            {error ? <p className="error">Er is iets misgegaan, klik op het logo om naar Home te gaan en kom later terug.</p> :
            <div className="container__div">
                <h2>Welcome!</h2>
                <h3>Ready to explore some cocktails?</h3>
                <form className="login__form">
                    <div className="login__div">
                        <ButtonFunction type="button" text="login" style={styleLogin} onClick={handleShowLogin}/>
                        <ButtonFunction type="button" text="register" style={styleRegister} onClick={handleShowRegister} />
                    </div>
                    <InputField label={showRegister ? "New Email:" : "Email:"}
                                id="field-email"
                                name="email"
                                type="text"
                                valueField={email}
                                handleChange={(e) => setEmail(e.target.value)}
                    />
                    {errorEmail &&  <p>Fill in a valid email address.</p>}
                    <InputField label={showRegister ? "New Password:" : "Password:"}
                                id="field-password"
                                name="password"
                                type="password"
                                valueField={password}
                                handleChange={(e) => setPassword(e.target.value)}
                    />
                    {errorPassword && <p>Your password was to short, must be over 8 characters.</p>}
                    {showLogin && <a href="mailto:benjaminmeijer1@gmail.com">Forgot password?</a>}
                </form>
                <div>
                    {showLogin &&
                    <ButtonFunction type="submit"
                                    text="log in"
                                    style="button-function"
                                    disableBtn={disableBtn}
                                    onClick={handleLogin}
                    />
                    }
                    {showRegister &&
                    <ButtonFunction type="submit"
                                    text="register"
                                    style="button-function"
                                    disableBtn={disableBtn}
                                    onClick={handleRegister}
                    />
                    }
                </div>
            </div>
            }
        </main>
    );
};

export default Login;