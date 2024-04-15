import "./input-field.css"

const InputField = ({name, label, placeholder, id, type, handleChange}) => {
    return (
        <div className="label">
            <label htmlFor={id}>{label}</label>
            <input className="input"
                   type={type}
                   placeholder={placeholder}
                   id={id}
                   name={name}
                   onChange={handleChange}
            />
        </div>
    );
};

export default InputField;