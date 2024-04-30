import "./button-function.css"

const ButtonFunction = ({type , text, style, onClick, disableBtn}) => {
    return (
        <button type={type}
                onClick={onClick}
                className={style}
                disabled={disableBtn}
        >
            {text}
        </button>
    );
};

export default ButtonFunction;