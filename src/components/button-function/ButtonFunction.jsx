import "./button-function.css"

const ButtonFunction = ({type , text, onClick}) => {
    return (
        <button type={type} onClick={onClick} className={text.includes("PUSH") ? "button-push" : "button-function"}>
            {text}
        </button>
    );
};

export default ButtonFunction;