import "./button-function.css"

const ButtonFunction = ({type , text}) => {
    return (
        <button type={type} className={text.includes("PUSH") ? "button-push" : "button-function"}>
            {text}
        </button>
    );
};

export default ButtonFunction;