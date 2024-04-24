import "./input-field.css"

const InputField = ({name, label, placeholder, id, type, handleChange, style, valueGrade, disabled}) => {
    return (
        <div className={style ? "" : "label"}>
            <label htmlFor={id}>{label}</label>
            <input className={style ? style : "input"}
                   type={type}
                   placeholder={placeholder}
                   id={id}
                   name={name}
                   onChange={handleChange}
                   value={valueGrade}
                   disabled={disabled}
            />
        </div>
    );
};

export default InputField;