import {Star} from "@phosphor-icons/react";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const StarIcon = ({size, style, idCocktail, userInfo, setUserInfo}) => {
    const { user, isAuth } = useContext(AuthContext)
    const [fillStar, toggleFillStar] = useState("fill");
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
                console.log(result.data)
            } catch (e) {
                console.error(e);
            }
        }
        void fetchData();
    }, []);

    //find out how to get the weight of the star filled when an item
    // const starFill = userInfo.map((item) => {
    //     return item
    // })
    //
    // console.log(starFill)

    // useEffect(() => {
    //     if (starFill[0] === idCocktail) {
    //         toggleFillStar("fill")
    //     } else {
    //         toggleFillStar("regular")
    //     }
    // },[])

    async function favoriteCocktail(idCocktail) {
        const newItem = { id: idCocktail };
        // Update state using functional form of setState
        setUserInfo(prevArray => [...prevArray, newItem]);

        const foundItem = userInfo.find((item) => {
            return item.id === newItem.id;
        })
        console.log(foundItem)

        if (foundItem === undefined) {
            console.log(newItem)
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
            console.log(userInfo)
            const updatedArray = userInfo.filter(item => item.id !== foundItem.id)
            console.log(updatedArray)
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