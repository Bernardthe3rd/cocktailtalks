import {Star} from "@phosphor-icons/react";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const StarIcon = ({size, weight, style, idCocktail, userInfo}) => {
    const { user } = useContext(AuthContext)
    const [idObject, setIdObject] = useState({userInfo})

    console.log(userInfo)

    async function favoriteCocktail () {
        const token = localStorage.getItem("token");
        console.log(userInfo)

        setIdObject({...idObject, id: idCocktail})

        try {
            const updateUserInfo = await axios.put(`https://api.datavortex.nl/cocktailtalks/users/${user.username}`, {
                name: user.username,
                email: user.email,
                password: user.password,
                info: JSON.stringify(idObject),
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            console.log(updateUserInfo)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <Star size={size} weight={weight} className={style} color="#FFB986" alt="star icon" onClick={favoriteCocktail}/>
        </>
    );
};

export default StarIcon;