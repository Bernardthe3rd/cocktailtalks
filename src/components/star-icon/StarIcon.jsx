import {Star} from "@phosphor-icons/react";
const StarIcon = ({size, weight, style}) => {

    return (
        <>
            <Star size={size} weight={weight} className={style} color="#FFB985" alt="star icon"/>
        </>
    );
};

export default StarIcon;