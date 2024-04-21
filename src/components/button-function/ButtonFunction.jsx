import "./button-function.css"

const ButtonFunction = ({type , text, onClick, disable}) => {
    return (
        <button type={type}
                onClick={onClick}
                className={text.includes("PUSH") ? "button-push" : "button-function"}
                disabled={disable}
        >
            {text}
        </button>
    );
};

export default ButtonFunction;