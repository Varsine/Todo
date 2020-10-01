import React from "react";

import "./Button.scss";

interface IButtonProps {
  className?: string;
  onClick: () => void
}

const Button: React.FC<IButtonProps> = ({ className = "", onClick, children }) => {
  return (<button onClick={onClick} className={`app-button ${className}`}>{children}</button>)
}
export default Button
