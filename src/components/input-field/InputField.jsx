import "./input-field.css"

const InputField = ({name, label, placeholder, id, type, handleChange}) => {
    return (
        <div className="label-style-login">
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} name={name} className="input-field" onChange={handleChange}/>
        </div>
    );
};

export default InputField;