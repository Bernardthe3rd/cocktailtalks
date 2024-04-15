import "./login.css"
import ButtonFunction from "../../components/button-function/ButtonFunction.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    // const [error, setError] = useState({});
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //state set formstate
    const [formState, setFormState] = useState({
        email: "",
        password:"",
    })
    //function handle submit form
    function handleFormChange (f) {
        setFormState({
            ...formState,
            [f.target.name]: f.target.value,
        })
    }
    //function handlechange
    function handleSubmitInlog (e) {
        e.preventDefault();
        console.log(
            `${formState.email}\n
            ${formState.password}\n
            later nog inbouwen dat hier een nieuwe post voor register komt of splitsing maken tussen inlog en register `
        )
        navigate("/account");
    }

    function handleSubmitRegister (e) {
        e.preventDefault();
        console.log(
            `${formState.email}\n
            ${formState.password}\n
            later nog inbouwen dat vertraging met navigate to komt en bericht over succesvol registratie `
        )
        navigate("/");
    }
    //navigate to een voor login en register

    //later bij authenticatie validate email en password ism helpers
    return (
        <>
            <main className="container">
                <div className="container__div">
                    <h2>Welcome!</h2>
                    <h3>Ready to explore some cocktails?</h3>
                    <form className="login__form">
                        <InputField label="Email:" id="field-email" name="email" type="text" handleChange={handleFormChange}/>
                        <InputField label="Password:" id="field-password" name="password" type="password" handleChange={handleFormChange}/>
                        <a href="mailto:benjaminmeijer1@gmail.com">Forgot password?</a>
                        <div className="login__div">
                            <ButtonFunction type="submit" text="log in" onClick={handleSubmitInlog}/>
                            <ButtonFunction type="submit" text="register" onClick={handleSubmitRegister}/>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Login;