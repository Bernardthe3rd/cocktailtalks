import {createContext, useEffect, useState} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {checkTokenValidity} from "../helpers/checkTokenValidity.js";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken && checkTokenValidity(storedToken)) { //validatie token nog helper van maken?!
            void login(storedToken);
        } else {
            void logout();
        }
    }, []);

    const login = async (jwtToken) => {
        const decodedJwt = jwtDecode(jwtToken);
        localStorage.setItem("token", jwtToken);
        try {
            const response = await axios.get(`https://api.datavortex.nl/cocktailtalks/users/${decodedJwt.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                }
            });
            console.log(response)
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    password: response.data.password,
                    authority: response.data.authorities[0].authority,
                    info: response.data.info,
                },
                status: "done"
            })
        } catch (e) {
            console.error(e)
        }
        console.log(`Gebruiker is succesvol ingelogd!`)
    }

    const logout = () => {
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        localStorage.clear();
        console.log("Gebruiker is uitgelogd!")
        navigate("/")
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {auth.status === "done" ? children : <p className="loading">Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;