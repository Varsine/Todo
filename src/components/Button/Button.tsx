import React from "react";

import "./Button.scss";

interface IButtonProps {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ disabled=false, className = "", onClick, children }) => {
  return (<button disabled={disabled} onClick={onClick} className={`app-button ${className}`}>{children}</button>)
}
export default Button
