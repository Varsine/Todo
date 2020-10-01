import React from "react";

import "./Button.scss";

interface IButtonProps {
  children: string,
  className?: string,
  onClick(): void,
}

const Button: React.FC<IButtonProps> = ({children, className = ""}) => {
  return (<button className={`app-button ${className}`}>{children}</button>)
}

export default Button
