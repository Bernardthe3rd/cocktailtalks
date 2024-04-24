import "./button-function.css"

const ButtonFunction = ({type , text, onClick, disableBtn}) => {
    return (
        <button type={type}
                onClick={onClick}
                className={text.includes("PUSH") ? "button-push" : "button-function"}
                disabled={disableBtn}
        >
            {text}
        </button>
    );
};

export default ButtonFunction;