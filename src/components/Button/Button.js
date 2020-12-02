import React from "react";

import "./Button.scss";

const Button = ({ className = "", onClick, children }) => {
    return (
        <button onClick={onClick} className={`app-button ${className}`}>
            {children}
        </button>
    )
}

export default Button;