import {Star} from "@phosphor-icons/react";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const StarIcon = ({size, style, idCocktail}) => {
    const { user, isAuth } = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const [fillStar, toggleFillStar] = useState("regular");
    const [userInfo, setUserInfo] = useState(user?.info ? JSON.parse(user.info) : []);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        if (isAuth) {
            let foundCocktail = userInfo.find((idt) => {
                return idt.id === idCocktail
            })

            if (foundCocktail) {
                toggleFillStar("fill")
            } else {
                toggleFillStar("regular")
            }
        }
    },[]);

    //function onClick to add a cocktail as favorite to userInfo
    async function favoriteCocktail(idCocktail) {
        const newItem = { id: idCocktail, feedback: { grade: "" , text: ""} };
        // Update state using functional form of setState
        setUserInfo(prevArray => [...prevArray, newItem]);

        const foundItem = userInfo.find((item) => {
            return item.id === newItem.id;
        })
        toggleLoading(true);

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
                console.log(updateUserInfo)
                toggleFillStar("fill");
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        } else {
            const updatedArray = userInfo.filter(item => item.id !== foundItem.id)
            toggleLoading(true);
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
                console.log(updateUserInfo)
                toggleFillStar("regular");
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }
        window.location.reload();
    }

    return (
        <>
            {loading && <p>Adding your favorite..</p>}
            {error && <p>Something went wrong with adding this cocktail to your favorites. Please try again later.</p>}
            {isAuth &&
            <Star size={size}
                  weight={fillStar}
                  alt="star icon"
                  color="#FFB986"
                  className={style}
                  onClick={() => favoriteCocktail(idCocktail)}
            />
            }
        </>
    );
};

export default StarIcon;