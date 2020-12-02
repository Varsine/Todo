import React from "react";

import "./InputField.scss";

const InputField = ({ 
    value, 
    name, 
    placeholder, 
    type, 
    onChange, 
    className = "",
 }) => {
    return (
        <input
            className={`app-input ${className}`}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default InputField;;