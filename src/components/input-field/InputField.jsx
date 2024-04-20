import "./input-field.css"

const InputField = ({name, label, placeholder, id, type, handleChange, style, value}) => {
    return (
        <div className={style ? "" : "label"}>
            <label htmlFor={id}>{label}</label>
            <input className={style ? style : "input"}
                   type={type}
                   placeholder={placeholder}
                   id={id}
                   name={name}
                   onChange={handleChange}
                   value={value}
            />
        </div>
    );
};

export default InputField;