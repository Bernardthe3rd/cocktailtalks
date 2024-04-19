import {Star} from "@phosphor-icons/react";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const StarIcon = ({size, style, idCocktail}) => {
    const { user, isAuth } = useContext(AuthContext)
    const [fillStar, toggleFillStar] = useState("fill");
    const token = localStorage.getItem("token");
    const [userInfo, setUserInfo] = useState(JSON.parse(user.info))

    useEffect(() => {
        let actie = userInfo.find((id) => {
            return id.id === idCocktail
        })
        if (actie) {
            toggleFillStar("fill")
        } else {
            toggleFillStar("regular")
        }
    }, []);

    async function favoriteCocktail(idCocktail) {
        const newItem = { id: idCocktail };
        // Update state using functional form of setState
        setUserInfo(prevArray => [...prevArray, newItem]);

        const foundItem = userInfo.find((item) => {
            return item.id === newItem.id;
        })

        if (foundItem === undefined) {
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
                toggleFillStar("fill")
            } catch (e) {
                console.error(e);
            }
        } else {
            const updatedArray = userInfo.filter(item => item.id !== foundItem.id)
            try {
                // Wait for the state update to complete
                await new Promise(resolve => setTimeout(resolve, 0));
                // Use the latest state value directly in the API call
                const updateUserInfo = await axios.put(`https://api.datavortex.nl/cocktailtalks/users/${user.username}`, {
                    name: user.username,
                    email: user.email,
                    password: user.password,
                    info: JSON.stringify(updatedArray),
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                console.log(updateUserInfo);
                toggleFillStar("regular")
            } catch (e) {
                console.error(e);
            }
        }
    }

    return (
        <>
            {isAuth &&
            <Star size={size} weight={fillStar} className={style} color="#FFB986" alt="star icon" onClick={() => favoriteCocktail(idCocktail)}/>
            }
        </>
    );
};

export default StarIcon;