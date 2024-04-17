import {Star} from "@phosphor-icons/react";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const StarIcon = ({size, weight, style, idCocktail, userInfo, setUserInfo}) => {
    const { user } = useContext(AuthContext)
    // const [fillStar, toggleFillStar] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.datavortex.nl/cocktailtalks/users/${user.username}/info`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                setUserInfo(result.data)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    async function favoriteCocktail(idCocktail) {
        const newItem = { id: idCocktail };
        // Update state using functional form of setState
        setUserInfo(prevArray => [...prevArray, newItem]);
        try {
            // Wait for the state update to complete
            await new Promise(resolve => setTimeout(resolve, 0));
            // Use the latest state value directly in the API call
            const updateUserInfo = await axios.put(`https://api.datavortex.nl/cocktailtalks/users/${user.username}`, {
                name: user.username,
                email: user.email,
                password: user.password,
                info: JSON.stringify([...userInfo, newItem]),
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(updateUserInfo);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <Star size={size} weight={weight} className={style} color="#FFB986" alt="star icon" onClick={() => favoriteCocktail(idCocktail)}/>
        </>
    );
};

export default StarIcon;